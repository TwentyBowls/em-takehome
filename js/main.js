/* TOGGLE NAV  */
function toggleNav() {
    const nav = document.querySelector('.nav')
    document.getElementById('nav-btn').addEventListener('click', () => {
        nav.classList.toggle('nav--open')
    })
}

toggleNav()



/* TOGGLE SUBMENUS */

// function toggleSubmenu(){
//     const submenus = document.querySelectorAll('.nav__subcategory')
//     const submenuBtns = document.querySelector('.nav__subcategory-btn')
//     submenuBtns.map(btn => btn.addEventListener('click', () => console.log('test')))
//     console.log(submenuBtns)
// }

// toggleSubmenu()

