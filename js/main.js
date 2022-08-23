/* TOGGLE NAV  */
const navToggle = document.querySelector('.nav__toggle')
const nav = document.querySelector('.nav__list')
navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible')
})