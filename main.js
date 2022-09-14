'use strict'

// navbar 투명하게 만들기 - 스크롤하면 원래대로 핑크색으로
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});

// navbar-menu 누르면 스크롤되기 (html에 data-link="" 추가수정완료)
const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click',(event)=>{
     const target = event.target;
     const link = target.dataset.link;
     if(link == null){
        return;
     }
   scrollIntoView(link);
});

// contact 누르면 스크롤 되기
const contactMe = document.querySelector('.home_contact');
contactMe.addEventListener('click',()=>{
    scrollIntoView('#contact');
});

// 반복되니까 함수 설정으로 정리하고 위에 호출하기
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}

// 스크롤 내려갈수록 Home 점점 투명하게 하기
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    home.style.opacity = 1 - window.scrollY / homeHeight;
})