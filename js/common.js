function hidePageLoader() {
  const pageLoader = document.querySelector(".page-loader");
  if (pageLoader) {
    pageLoader.classList.add("loaded");
    pageLoader.addEventListener(
      "transitionend",
      () => {
        if (pageLoader.classList.contains("loaded")) {
          pageLoader.remove();
        }
      },
      { once: true }
    );
  }
}

function getRem() {
  return parseFloat(getComputedStyle(document.documentElement).fontSize);
}

window.addEventListener("load", () => {
  hidePageLoader();
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const map = document.querySelector(".main-contacts__map");

  const contentPhone = document.querySelector(".main-bday__content-phone");

  const modal = new HystModal({
    linkAttributeName: "data-hystmodal",
    //settings (optional). see API
  });

  let phones = document.querySelectorAll(".c-phone-input");

  phones.forEach((phone) => {
    const maskOptions = {
      mask: "+{7} (000) 000-00-00",
    };
    const mask = IMask(phone, maskOptions);
  });

  const mainParkSwiper = new Swiper(".main-park__slider", {
    slidesPerView: "auto",
    spaceBetween: 0.5 * getRem(),
    slidesOffsetBefore: 1 * getRem(),
    slidesOffsetAfter: 1 * getRem(),
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      992: {
        spaceBetween: 0,
        enabled: false, // отключаем swiper на десктопе
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
      },
    },
  });

  window.addEventListener("resize", () => {
    mainParkSwiper.update();
  });

  const mainMenuSwiper = new Swiper(".main-menu__slide", {
    slidesPerView: "auto",
    spaceBetween: 0.5 * getRem(),
    slidesOffsetBefore: 1 * getRem(),
    slidesOffsetAfter: 1 * getRem(),
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".main-menu .c-title__arrow--next",
      prevEl: ".main-menu .c-title__arrow--prev",
    },

    breakpoints: {
      992: {
        slidesOffsetBefore: 7.5 * getRem(),
        slidesOffsetAfter: 7.5 * getRem(),
      },
    },
  });

  window.addEventListener("resize", () => {
    mainMenuSwiper.update();
  });

  const bDayParkSwiper = new Swiper(".b-day-park__slide", {
    slidesPerView: "auto",
    spaceBetween: 1.5 * getRem(),
    slidesOffsetBefore: 1 * getRem(),
    slidesOffsetAfter: 1 * getRem(),
    // If we need pagination
    //pagination: {
    //  el: ".swiper-pagination",
    //},

    // Navigation arrows
    navigation: {
      nextEl: ".b-day-park .c-title__arrow--next",
      prevEl: ".b-day-park .c-title__arrow--prev",
    },

    breakpoints: {
      992: {
        slidesOffsetBefore: 7.5 * getRem(),
        slidesOffsetAfter: 7.5 * getRem(),
      },
    },
  });

  window.addEventListener("resize", () => {
    bDayParkSwiper.update();
  });

  const mainUslugiSwiper = new Swiper(".main-uslugi__slide", {
    slidesPerView: "auto",
    spaceBetween: 0.5 * getRem(),
    slidesOffsetBefore: 1 * getRem(),
    slidesOffsetAfter: 1 * getRem(),
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".main-uslugi .c-title__arrow--next",
      prevEl: ".main-uslugi .c-title__arrow--prev",
    },

    breakpoints: {
      992: {
        slidesOffsetBefore: 7.5 * getRem(),
        slidesOffsetAfter: 7.5 * getRem(),
      },
    },
  });

  window.addEventListener("resize", () => {
    mainUslugiSwiper.update();
  });

  let mainMenuTabs = document.querySelectorAll(".main-menu__tab");
  let activeMainMenuTab = document.querySelector(".main-menu__tab--active");
  let mainMenuSlides = document.querySelectorAll(".main-menu__slide");
  let activeMainMenuSlide = document.querySelector(".main-menu__slide--active");

  mainMenuTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      if (tab.classList.contains("main-menu__slide--active")) return 0;
      activeMainMenuTab.classList.remove("main-menu__tab--active");
      activeMainMenuSlide.classList.remove("main-menu__slide--active");

      tab.classList.add("main-menu__tab--active");
      mainMenuSlides[index].classList.add("main-menu__slide--active");

      activeMainMenuTab = tab;
      activeMainMenuSlide = mainMenuSlides[index];
    });
  });

  if (header) {
    let button = header.querySelector(".header__burger");
    button.addEventListener("click", () => {
      header.classList.toggle("header--mobile-menu-active");
    });
  }

  if (map) {
    ymaps.ready(init);

    function init() {
      function parseCoordinates(str) {
        try {
          const coords = str.replace(/[\[\] ]/g, "").split(",");
          return coords.map((coord) => parseFloat(coord));
        } catch (e) {
          console.error("Ошибка парсинга координат:", e);
          return [55.755864, 37.617698];
        }
      }

      if (map && map.dataset.coordinates) {
        const coordinates1 = parseCoordinates(map.dataset.coordinates);

        const map_1 = new ymaps.Map("map", {
          center: coordinates1,
          zoom: 10,
          controls: ["zoomControl", "geolocationControl"],
        });

        const placemark_1 = new ymaps.Placemark(coordinates1, {});

        map_1.geoObjects.add(placemark_1);
      }
    }
  }

  if (contentPhone) {
    const video = contentPhone.querySelector("video");
    const button = contentPhone.querySelector("button");

    button.addEventListener("click", () => {
      video.play();
      video.controls = true;
      button.style.display = "none";
    });
  }

  let faqs = document.querySelectorAll(".faq__block");

  faqs.forEach((faq) => {
    let title = faq.querySelector(".faq__block-title");

    title.addEventListener("click", () => {
      faq.classList.toggle("faq__block--active");
    });
  });
});
