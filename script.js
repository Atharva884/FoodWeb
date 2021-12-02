let bar = document.querySelector('.bar')
let navbar = document.querySelector('.navbar')

bar.addEventListener('click', ()=>{
    bar.classList.toggle('fa-times')
    navbar.classList.toggle('active')
})

var swiper = new Swiper(".home-container", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    spaceBetween: 20,
    centeredSlides: true,
    autoplay:{
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
    },
    loop: true,
    grabCursor: true,
});

var swiper = new Swiper(".review-container", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay:{
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
  },
  loop: true,
  grabCursor: true,
});

window.onscroll=()=>{
  let head = document.querySelector('.head')
  if(window.scrollY > 0){
    head.classList.add('box-shadow')
  }else{
    head.classList.remove('box-shadow')
  }
}


// Navbar Script
let home = document.querySelector('.home')
let dish = document.querySelector('.dish')
let about = document.querySelector('.about')
let menu = document.querySelector('.menu')
let review = document.querySelector('.review')
let order = document.querySelector('.order')

home.addEventListener('click', ()=>{
  home.classList.add('active')
  home.classList.remove('active')
  dish.classList.remove('active')
  about.classList.remove('active')
  menu.classList.remove('active')
  review.classList.remove('active')
  order.classList.remove('active')
})
dish.addEventListener('click', ()=>{
  home.classList.remove('active')
  dish.classList.add('active')
  about.classList.remove('active')
  menu.classList.remove('active')
  review.classList.remove('active')
  order.classList.remove('active')
})
about.addEventListener('click', ()=>{
  home.classList.remove('active')
  dish.classList.remove('active')
  about.classList.add('active')
  menu.classList.remove('active')
  review.classList.remove('active')
  order.classList.remove('active')
})
menu.addEventListener('click', ()=>{
  home.classList.remove('active')
  dish.classList.remove('active')
  about.classList.remove('active')
  menu.classList.add('active')
  review.classList.remove('active')
})
review.addEventListener('click', ()=>{
  home.classList.remove('active')
  dish.classList.remove('active')
  about.classList.remove('active')
  menu.classList.remove('active')
  review.classList.add('active')
  order.classList.remove('active')
})
order.addEventListener('click', ()=>{
  home.classList.remove('active')
  dish.classList.remove('active')
  about.classList.remove('active')
  menu.classList.remove('active')
  review.classList.remove('active')
  order.classList.add('active')
})


// Loader Script

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out')
}

window.onload=()=>{
  setInterval(loader, 3000)
}