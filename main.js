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

// 메뉴, 컨택트미 누르면 스크롤되기 (html에 data-linkk="" 추가수정완료)
const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click',(event)=>{
     const target = event.target;
     const link = target.dataset.link;
     if(link == null){
        return;
     }

     const scrollTo = document.querySelector(link);
     scrollTo.scrollIntoView({behavior:'smooth'});
});