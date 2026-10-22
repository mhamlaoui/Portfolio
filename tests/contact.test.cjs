const { test } = require('node:test');
const assert = require('node:assert/strict');
const { createContactHandler } = require('../server/contact');

const baseEnv = {
  SITE_ORIGIN:'https://portfolio.example',
  BREVO_API_KEY:'test-key', CONTACT_FROM:'sender@example.com', CONTACT_TO:'owner@example.com'
};
function fixture(options = {}) {
  const calls = [];
  const fetchImpl = async (url, init) => {
    calls.push({url,init});
    if (options.timeout) throw new Error('sensitive timeout');
    const status = options.providerStatus || 201;
    return {ok:status < 300,status,json:async()=> options.badResponse ? {} : {messageId:'<accepted@example.com>'}};
  };
  const handler = createContactHandler({env:{...baseEnv,...options.env},fetchImpl});
  const invoke = async (changes={}) => {
    const req = {
      method:'POST', headers:{origin:baseEnv.SITE_ORIGIN,'content-type':'application/json',
        'sec-fetch-site':'same-origin','x-vercel-forwarded-for':'192.0.2.10',...changes.headers},
      socket:{remoteAddress:'127.0.0.1'},
      body:{name:'Zoé O’Connor',email:'visitor@example.com',subject:'Projet',message:'Bonjour, parlons de ce projet.',website:''},
      ...changes
    };
    req.headers = {origin:baseEnv.SITE_ORIGIN,'content-type':'application/json','sec-fetch-site':'same-origin',
      'x-vercel-forwarded-for':'192.0.2.10',...changes.headers};
    const res = {headers:{},setHeader(k,v){this.headers[k]=v;},end(value){this.body=JSON.parse(value);}};
    await handler(req,res); return res;
  };
  return {invoke,calls};
}
test('accepts only after provider acknowledgement; fixed recipient and safe Reply-To',async()=>{
  const {invoke,calls}=fixture();const res=await invoke();
  assert.equal(res.statusCode,200); assert.equal(res.body.code,'accepted');
  const mail=JSON.parse(calls.find(c=>c.url.includes('brevo.com')).init.body);
  assert.deepEqual(mail.to,[{email:baseEnv.CONTACT_TO}]);assert.equal(mail.sender.email,baseEnv.CONTACT_FROM);
  assert.equal(mail.replyTo.email,'visitor@example.com');assert.equal(mail.htmlContent,undefined);
  assert.equal(res.headers['Cache-Control'],'no-store');assert.equal(res.headers['Access-Control-Allow-Origin'],undefined);
  assert.equal(calls.length,1);
  assert.equal(calls[0].url,'https://api.brevo.com/v3/smtp/email');
});
for (const [name,change,status] of [
  ['wrong method',{method:'GET'},405],
  ['foreign origin',{headers:{origin:'https://attacker.example'}},403],
  ['absent origin',{headers:{origin:undefined}},403],
  ['cross-site request',{headers:{'sec-fetch-site':'cross-site'}},403],
  ['wrong content type',{headers:{'content-type':'text/plain'}},415],
  ['oversized request',{headers:{'content-length':'25000'}},413],
  ['malformed JSON',{body:'{'},400],
  ['array body',{body:[]},400],
  ['invalid email',{body:{email:'not-email',message:'A long enough message'}},400],
  ['header injection',{body:{email:'a@example.com',subject:'Hello\r\nBcc: evil@example.com',message:'A long enough message'}},400],
  ['honeypot',{body:{email:'a@example.com',website:'bot',message:'A long enough message'}},400],
  ['additional recipients',{body:{email:'a@example.com',message:'A long enough message',to:'evil@example.com'}},400],
  ['huge message',{body:{email:'a@example.com',message:'x'.repeat(5001)}},400],
  ['non-string field',{body:{email:['a@example.com'],message:'A long enough message'}},400]
]) test(`rejects ${name} before external calls`,async()=>{
  const {invoke,calls}=fixture();assert.equal((await invoke(change)).statusCode,status);assert.equal(calls.length,0);
});
test('optional name and subject; Unicode message remains intact',async()=>{
  const {invoke}=fixture();assert.equal((await invoke({body:{email:'a@example.com',message:'Bonjour مرحبا — voici mon message.'}})).statusCode,200);
});
test('missing or invalid required configuration blocks sending',async()=>{
  for(const env of [{BREVO_API_KEY:''},{SITE_ORIGIN:'http://insecure.example'},{SITE_ORIGIN:'https://portfolio.example/'},{CONTACT_FROM:'invalid'},{CONTACT_TO:''}]) {
    const {invoke,calls}=fixture({env});assert.equal((await invoke()).statusCode,503);assert.equal(calls.length,0);
  }
});
test('only four settings are needed; old setup gates are ignored',async()=>{
  const {invoke,calls}=fixture({env:{CONTACT_ENABLED:'false',PRIVACY_REVIEWED:'false'}});
  assert.equal((await invoke()).statusCode,200);assert.equal(calls.length,1);
});
test('provider rate limit returns retry guidance',async()=>{
  const {invoke,calls}=fixture({providerStatus:429});const r=await invoke();
  assert.equal(r.statusCode,429);assert.equal(r.headers['Retry-After'],'60');assert.equal(calls.length,1);
});
test('timeout reports uncertain without automatically resending',async()=>{
  const {invoke,calls}=fixture({timeout:true});assert.equal((await invoke()).body.code,'uncertain');assert.equal(calls.length,1);
});
test('provider rejection is not success and reveals no secrets',async()=>{
  const {invoke,calls}=fixture({providerStatus:401});const r=await invoke();assert.equal(r.statusCode,503);
  assert.equal(r.body.success,false);assert.equal(calls.length,1);assert.ok(!JSON.stringify(r.body).includes('test-key'));
});
test('provider 5xx or missing receipt cannot report successful sending',async()=>{
  for(const options of [{providerStatus:500},{badResponse:true}]) {
    const {invoke}=fixture(options);const r=await invoke();assert.equal(r.statusCode,502);assert.equal(r.body.code,'uncertain');
  }
});
