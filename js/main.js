/* TOGGLE NAV  */
function toggleNav() {
    const nav = document.querySelector('.nav')
    document.getElementById('nav-btn').addEventListener('click', () => {
        nav.classList.toggle('nav--open')
    })
}

toggleNav()



