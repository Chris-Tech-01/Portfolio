import { 
    getRandomNumber, 
    toggleSidebar
} from './index.js';

document.addEventListener('DOMContentLoaded', () => {

  const number = getRandomNumber();
  console.log('Random number:', number);

  const toggleBtn = document.querySelector('#sidebarToggle');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleSidebar);
  }
});
