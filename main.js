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

// 스크롤 내려갈수록 Home 점점 투명하게 하기
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    home.style.opacity = 1 - window.scrollY / homeHeight;
})

//arrow 버튼으로 스크롤
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=>{
    if(window.scrollY > homeHeight /2 ){
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});

//arrow 클릭하면 home으로 올라오기
arrowUp.addEventListener('click',()=>{
    scrollIntoView('#home');
});

//project
const workBtnContainer = document.querySelector('.work_categories');
const projectContainer = document.querySelector('.work_projects');
const projects = document.querySelectorAll('.project');
    workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
      return;
    }
  
     // Remove selection from the previous item and select the new one
  const active = document.querySelector('.category__btn.selected');
  if (active != null) {
    active.classList.remove('selected');
  }
  e.target.classList.add('selected');

  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
      console.log(project.dataset.type);
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});
// 반복되니까 함수 설정으로 정리하고 위에 호출하기
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
};