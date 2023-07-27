// 
// 
// routing
const reference = document.querySelectorAll(".nav__link");
for (let i = 0; i < reference.length; i++) {
  reference[i].addEventListener("click", (e) => {
    e.preventDefault();
    route(e.target.href);
  });
}

function route(url) {
  window.history.pushState({}, "", url);
  handleLocation()
}

const routers = {
  "/": "about.html",
  "/info": "exhibitions.html",
  "/exhibitions": "exhibitions.html",

  "/paintings": "products.html",
  "/holidmaster": "holidmaster.html",
  "/masterclass": "masterclass.html",
  "/reviews": "reviews.html",
  "/cost": "cost.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  console.log(path);
  const html = await fetch(routers[path]).then(data => data.text())
  document.querySelector('.main').innerHTML = html
  // document.querySelector('.main').innerHTML = `
  // <?php
  //   require "${routers[path]}";
  // ?>`
};

window.route = route;
window.onpopstate = handleLocation;
handleLocation()



// // 
// // 
// // swiper
// import Swiper, { Navigation} from 'swiper';

// Swiper.use([Navigation]);

// document.querySelectorAll('.swiper').forEach(el => {
//   var swiper = new Swiper(el, {
//   loop: true,
//   slidesPerView: 'auto',
//   spaceBetween: 40,
//   centeredSlides: true,

//   navigation: {
//     nextEl: el.querySelector('.swiper-arrow-next'),
//     prevEl: el.querySelector('.swiper-arrow-prev')
//  }
// });
// });



import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

(function(){
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');
  const closeBtn = document?.querySelector('[data-menu-close]');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('menu--active');

    if (menu?.classList.contains('menu--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      disableScroll();
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      enableScroll();
    }
  });

  closeBtn?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--active');
    enableScroll();
  });

  overlay?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--active');
    enableScroll();
  });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('menu--active');
      enableScroll();
    });
  });
})();
