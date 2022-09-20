const selectElement = selector =>
{
    const element = document.querySelector(selector)
    if(element) return element;
throw new Error(`Something went,make sure that ${selector} exists or is typed correctly.`);

};

const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if(this.scrollY >=15){
        headerElement.classList.add('activated');
    }else{
        headerElement.classList.remove('activated');
    }
};

window.addEventListener('scroll',scrollHeader);

const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click',toggleMenu);

// const menuToggleIcon = selectElement('menu-toggle-icon')
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-button');
const currentTheme = localStorage.getItem('currentTheme');

if(currentTheme){
    bodyElement.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', () =>{
    bodyElement.classList.toggle('light-theme');

    if(bodyElement.classList.contains('light-theme')){
        localStorage.setItem('currentTheme','themeActive');

    }else{
        localStorage.removeItem('currentTheme');
    }
});

const formopenBtn = selectElement('#search-line');
const formcloseBtn= selectElement('#form-close-btn');
const searchFormcontainer = selectElement("#search-form-container");


formopenBtn.addEventListener('click', () =>
    searchFormcontainer.classList.add('activated'));

formcloseBtn.addEventListener('click', () =>
    searchFormcontainer.classList.remove('activated')
);

window.addEventListener('keyup',event =>{
    if(event.key === 'Escape') searchFormcontainer.classList.remove('activated');
});

const swiper = new Swiper('.swiper',{
    slidesPerView:1,
    spaceBetween:20,
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
    pagination:{
          el:'.swiper-pagination'
    },
    breakpoints:{
        700:{
            slidesPerView:2
        },
        1200:{
            slidesPerView:3
        }
    }
});

