import { 
    toggleSidebar,
    toggleBurgerMenu,
    validateContactForm,
    bannerTyping
} from './index.js';

document.addEventListener('DOMContentLoaded', () => {

  const toggleBtn = document.querySelector('#sidebarToggle');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleSidebar);
  }

  toggleBurgerMenu();
  bannerTyping();

  const form = document.querySelector('.contact-box');
  
  if (form) {

    form.setAttribute('novalidate', '');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const { isValid, errors } = validateContactForm(form);

        if (!isValid) {
          alert(errors.join('\n'));
        } else {
          alert('Form submitted successfully!');
          form.reset();
        }
    });
  }
});
