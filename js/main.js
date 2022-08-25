/* TOGGLE NAV  */
function toggleNav() {
    const nav = document.querySelector('.nav')
    document.getElementById('nav-btn').addEventListener('click', () => {
        nav.classList.toggle('nav--open')
    })
}

toggleNav()

/* SWIPER  */
const swiper = new Swiper('.swiper', {
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

