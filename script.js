const projectName = 'my portfolio';
const projectName = 'my portfolio';
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-list')[0]
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
