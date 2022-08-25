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
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

