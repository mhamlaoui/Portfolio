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

    // 3. Contact Form Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalBtnContent = submitBtn.innerHTML;
            
            // Get form data
            const formData = {
                name: contactForm.querySelector('#name').value,
                email: contactForm.querySelector('#email').value,
                subject: contactForm.querySelector('#subject').value,
                message: contactForm.querySelector('#message').value
            };
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi...';
            submitBtn.disabled = true;
            
            try {
                const response = await fetch('contact.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });
                
                const result = await response.json();
                
                if (result.success) {
                    // Show success message
                    showNotification('Message envoyé avec succès!', 'success');
                    contactForm.reset();
                } else {
                    showNotification(result.message || 'Erreur lors de l\'envoi.', 'error');
                }
            } catch (error) {
                // Fallback: open email client with pre-filled data
                const mailtoSubject = encodeURIComponent(formData.subject);
                const mailtoBody = encodeURIComponent(
                    `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
                );
                const mailtoLink = `mailto:im.hamlaoui@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
                
                // Show info and open email client
                showNotification('Ouverture de votre client email...', 'success');
                window.location.href = mailtoLink;
            }
            
            // Reset button
            submitBtn.innerHTML = originalBtnContent;
            submitBtn.disabled = false;
        });
    }
    
    // Notification helper
    function showNotification(message, type) {
        // Remove existing notification
        const existing = document.querySelector('.notification');
        if (existing) existing.remove();
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => notification.classList.add('show'), 10);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }
});