document.addEventListener('DOMContentLoaded', () => {
  // Toggle menu bar and navbar visibility
  const menu = document.querySelector('#menu-bars');
  const navbar = document.querySelector('.navbar');

  menu.addEventListener('click', () => {
      menu.classList.toggle('fa-times');
      navbar.classList.toggle('active');
  });

  // Close menu on scroll
  window.addEventListener('scroll', () => {
      menu.classList.remove('fa-times');
      navbar.classList.remove('active');
  });

  // Toggle search form visibility
  const searchIcon = document.querySelector('#search-icon');
  const searchForm = document.querySelector('#search-form');
  const closeIcon = document.querySelector('#close');

  searchIcon.addEventListener('click', () => {
      searchForm.classList.toggle('active');
  });

  closeIcon.addEventListener('click', () => {
      searchForm.classList.remove('active');
  });

  // Initialize Swiper
  const swiper = new Swiper('.home-slider', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
  });
});

var swiper = new Swiper('.review-slider', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  
