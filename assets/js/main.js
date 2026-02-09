document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Text
    const textPath = document.getElementById('text-path');
    if (textPath) {
        window.addEventListener('scroll', () => {
            let scrollY = window.scrollY;
            let newOffset = 50 - (scrollY * 0.2);
            textPath.setAttribute('startOffset', newOffset + '%');
        });
    }

    // 2. Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if(hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            const isFlex = navLinks.style.display === 'flex';
            if (isFlex) {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(11, 14, 20, 0.95)';
                navLinks.style.padding = '20px';
                navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
            }
        });
    }
});