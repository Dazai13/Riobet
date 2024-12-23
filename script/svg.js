function loadSVG(filePath, containerId) {
    fetch(filePath)
    .then(response => response.text())
    .then(svgContent => {
        document.getElementById(containerId).innerHTML = svgContent;
    })
    .catch(error => console.error('Ошибка загрузки SVG:', error));
}

loadSVG('img/1.svg', 'bruger');
loadSVG('img/search.svg', 'search');
loadSVG('img/logo.svg', 'logo');
loadSVG('img/logo.svg', 'logo1');
loadSVG('img/sport.svg', 'sports');
loadSVG('img/slots.svg', 'slots');
loadSVG('img/lc.svg', 'lc');
loadSVG('img/tour.svg', 'tour');
loadSVG('img/bounce.svg', 'bounce');
loadSVG('img/loyal.svg', 'loyal');
loadSVG('img/zal.svg', 'zal');
loadSVG('img/coin1.svg', 'coin1');
loadSVG('img/coin2.svg', 'coin2');
loadSVG('img/prov.svg', 'prov');
loadSVG('img/searcher.svg', 'seacrher');
loadSVG('img/play.svg', 'play');
loadSVG('img/play.svg', 'play1');
loadSVG('img/play.svg', 'play2');
loadSVG('img/play.svg', 'play3');
loadSVG('img/play.svg', 'play4');
loadSVG('img/play.svg', 'play5');
loadSVG('img/play.svg', 'play6');
loadSVG('img/play.svg', 'play7');
loadSVG('img/play.svg', 'play8');
loadSVG('img/play.svg', 'play9');
loadSVG('img/play.svg', 'play10');
loadSVG('img/play.svg', 'play11');
loadSVG('img/play.svg', 'play12');
loadSVG('img/play.svg', 'play13');
loadSVG('img/play.svg', 'play14');
loadSVG('img/play.svg', 'play15');
loadSVG('img/play.svg', 'play16');
loadSVG('img/play.svg', 'play17');
loadSVG('img/play.svg', 'play18');
loadSVG('img/info.svg', 'information');
loadSVG('img/info.svg', 'information1');
loadSVG('img/info.svg', 'information2');
loadSVG('img/info.svg', 'information3');
loadSVG('img/info.svg', 'information4');
loadSVG('img/info.svg', 'information5');
loadSVG('img/info.svg', 'information6');
loadSVG('img/info.svg', 'information7');
loadSVG('img/info.svg', 'information8');
loadSVG('img/info.svg', 'information9');
loadSVG('img/info.svg', 'information10');
loadSVG('img/info.svg', 'information11');
loadSVG('img/info.svg', 'information12');
loadSVG('img/info.svg', 'information13');
loadSVG('img/info.svg', 'information14');
loadSVG('img/info.svg', 'information15');
loadSVG('img/info.svg', 'information16');
loadSVG('img/info.svg', 'information17');
loadSVG('img/info.svg', 'information18');
loadSVG('img/info.svg', 'information19');
loadSVG('img/like.svg', 'like'); 
loadSVG('img/like.svg', 'like1');
loadSVG('img/like.svg', 'like2');
loadSVG('img/like.svg', 'like3');
loadSVG('img/like.svg', 'like4');
loadSVG('img/like.svg', 'like5');
loadSVG('img/like.svg', 'like6');
loadSVG('img/like.svg', 'like7');
loadSVG('img/like.svg', 'like8');
loadSVG('img/like.svg', 'like9');
loadSVG('img/like.svg', 'like10');
loadSVG('img/like.svg', 'like11');
loadSVG('img/like.svg', 'like12');
loadSVG('img/like.svg', 'like13');
loadSVG('img/like.svg', 'like14');
loadSVG('img/like.svg', 'like15');
loadSVG('img/like.svg', 'like16');
loadSVG('img/like.svg', 'like17');
loadSVG('img/like.svg', 'like18');
loadSVG('img/like.svg', 'like19');
loadSVG('img/coin3.svg', 'coin3');
loadSVG('img/coin4.svg', 'coin4');
loadSVG('img/license.svg', 'license');
loadSVG('img/license1.svg', 'license1');
loadSVG('img/itemcoin.svg', 'itemcoin');
loadSVG('img/itemcoin1.svg', 'itemcoin1');
loadSVG('img/itemcoin2.svg', 'itemcoin2');
loadSVG('img/itemcoin3.svg', 'itemcoin3');
loadSVG('img/helper.svg', 'helper');
loadSVG('img/helper.svg', 'helper1');
loadSVG('img/arrow.svg', 'arrownone');


"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Выбор элементов
  const burgerBtn = document.querySelector(".header-menu");
  const mobileMenu = document.querySelector(".js-right-sidebar");
  const buttons = document.querySelectorAll(".button, .menu__item");

  // Логика для бургер-меню
  if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener("click", () => {
      burgerBtn.classList.toggle("_active");
      mobileMenu.classList.toggle("_active");

      // Переключение видимости меню
      if (mobileMenu.classList.contains("_active")) {
        mobileMenu.style.display = "block";
      } else {
        mobileMenu.style.display = "none";
      }
    });
  }

  // Обработка кликов по кнопкам и редирект
  if (buttons) {
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        // Выполните ваш редирект здесь
        window.location.href = "https://tracker.rioaffi.com/link?btag=61651111_345971";
      });
    });
  }
});
