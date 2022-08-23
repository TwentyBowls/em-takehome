/* TOGGLE NAV  */
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav__items')
    document.getElementById('nav-btn').addEventListener('click', () => {
        nav.classList.toggle('nav--open')
    })
})