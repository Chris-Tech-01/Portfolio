function typeWriterEffect(element, text, speed = 80, callback = null) {
    
    let index = 0;
    element.textContent = '';

    function type() {
        if (index < text.length) {

            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);

        } else if (callback) {
            callback();
        }
    }

    type();
}

export function bannerTyping() {

    const title = document.getElementById('bannerTitle');
    const subtitle = document.getElementById('bannerSubtitle');

    if (title && subtitle) {
            
        typeWriterEffect(title, 'My Name is Chris Foley', 80, () => {
            
            typeWriterEffect(subtitle, "I'm a Web Developer", 80);
        });
    }
}

export function toggleBurgerMenu() {
    
const burgerBtn = document.querySelector('.header-btn');

if (!burgerBtn) return;

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
    });
}