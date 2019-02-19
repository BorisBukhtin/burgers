$(document).ready(function(){

$('.button--reviews').click(
    function(){
                $('.modal-review__inner').addClass('modal-review__inner--open');
    }
);

$('.close--feed').click(
    function(){
        $('.modal-review__inner').removeClass('modal-review__inner--open');
    }
);

});



const button = document.querySelector('.menu__burger');
const fullmenu = document.querySelector('.full-menu');
const close = document.querySelector('.close');
const closeitem = document.querySelectorAll('.full-menu__wrapper > .menu > .menu__list > .menu__item');

// fullmenu
button.addEventListener('click', e => {

    fullmenu.classList.add('full-menu--active');

});

close.addEventListener('click', e => {
    fullmenu.classList.remove('full-menu--active');
});

for (const item of closeitem) {

    item.addEventListener('click', del => {
        fullmenu.classList.remove('full-menu--active');
});

};



// team
const verticalAccs = document.querySelectorAll ('.accordeon__item');

for (const oneVerticalAcc of verticalAccs) {
    oneVerticalAcc.addEventListener('click', opn);
    
}

function opn(e) {
    const curItem = e.currentTarget;
    const isClosedItem = curItem.classList.contains("accordeon__item--active");
  
    if (isClosedItem) {
      closeItemsAndRemoveActive(verticalAccs);
    } else {
      closeItemsAndRemoveActive(verticalAccs);
      openItem(curItem);
    }
  }


  function closeItemsAndRemoveActive(verticalAccs) {
    Array.from(verticalAccs).forEach(elem => {
      elem.classList.remove("accordeon__item--active");
      elem.querySelector(".accordeon__info").style.height = 0;
    });
  }
  
  function openItem(oneVerticalAcc) {
    const content = oneVerticalAcc.querySelector(".accordeon__info");
    const textBlock = content.firstElementChild;
    const reqHeight = textBlock.getBoundingClientRect().height;
  
    oneVerticalAcc.classList.add("accordeon__item--active");
    content.style.height = `${reqHeight}px`;
  }


// slider
  var slideNow = 1;
  var itemSlide = document.querySelectorAll('.main-menu__content');
  var slideCount = itemSlide.length;
  var translateWidth = 0;
  
  $(document).ready(function() {
     
  
      document.querySelector('.main-menu__link--left').addEventListener('click', nextSlide);
  
      document.querySelector('.main-menu__link--right').addEventListener('click', prevSlide);
    
      function nextSlide() {
        if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
            $('.main-menu__wrapper').css('transform', 'translate(0, 0)');
            slideNow = 1;
        } else {
            translateWidth = -$('.main-menu__slider').width() * (slideNow);
            $('.main-menu__wrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow++;
        }
    }
    
    function prevSlide() {
        if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
            translateWidth = -$('.main-menu__slider').width() * (slideCount - 1);
            $('.main-menu__wrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = slideCount;
        } else {
            translateWidth = -$('.main-menu__slider').width() * (slideNow - 2);
            $('.main-menu__wrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow--;
        }
    }

  });



function accordionMenu() {
const menuItems = document.querySelectorAll('.accordeon-two__item'); // полуаем все li элементы
const menuAccord = document.querySelector('.accordeon-two__list'); // полуаем ul элемент

menuAccord.addEventListener('click', event => {
let target = event.target.parentNode; // родитель спана - ссылка
let content = target.nextElementSibling; // следующий сосед ссылки - див с контентом
let item = target.parentNode; // родитель ссылки - лишка

const tarWidth = target.clientWidth; // ширина одной лишки (ссылки)
const windowWidth = document.documentElement.clientWidth; // ширина окна браузера
const layoutContentWidth = 520; // ширина контента
const breakpointPhone = 480; // точка меньше которой меняется поведение слайдера
const closeMenuWidth = tarWidth * menuItems.length; // ширина закрытого слайдера (3 лишки)
const openMenuWidth = closeMenuWidth + layoutContentWidth; // ширина открытого слайдера (3 лишки и контент)

// проверяем был ли клик по спану
if (event.target.classList.contains('accordeon-two__title')) {
  moveMenu();
}
// клик был не по спану - переопределяем переменные
target = event.target; // ссылка
content = target.nextElementSibling;
item = target.parentNode;

// проверяем был ли клик по ссылке
if (target.classList.contains('accordeon-two__link')) {
  moveMenu();
}

function moveMenu() {
  // закрываем все лишки, кроме той по которой был клик
  for (const iterator of menuItems) {
    if (iterator != item) {
      iterator.classList.remove('accordeon-two__item--active');
      iterator.lastElementChild.style.width = 0;
      menuAccord.style.transform = `translateX(0)`;
    }
  }

  if (item.classList.contains('accordeon-two__item--active')) {
    item.classList.remove('accordeon-two__item--active');
    content.style.width = 0;
  } else {
    item.classList.add('accordeon-two__item--active');

    if (windowWidth > breakpointPhone && windowWidth < openMenuWidth) {
      content.style.width = windowWidth - closeMenuWidth + 'px';
    } else if (windowWidth <= breakpointPhone) {
      let num;
      // получаем число лишек на которое нужно сдвинуть список
      for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i] === item) {
          num = menuItems.length - (i + 1);
        }
      }

      menuAccord.style.transform = `translateX(${tarWidth * num}px)`;
      content.style.width = windowWidth - tarWidth + 'px';
    } else {
      content.style.width = 520 + 'px';
    }
  }
}
});
}

accordionMenu();





const myForm = document.querySelector('.form');
const sendButton = document.querySelector('.button--order');

sendButton.addEventListener('click', function (event){
    event.preventDefault();
    
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST','https://webdev-api.loftschool.com/sendmail');
    xhr.send(JSON.stringify(formData));
    xhr.addEventListener('load', () => {
        if (xhr.response.status) {
            console.log('Данные отправлены');
        }
    } );



});
