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

  const mainMenuSwiper = new Swiper(".main-menu .main-menu__slide", {
    slidesPerView: "auto",
    spaceBetween: 0.25 * getRem(),
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
        spaceBetween: 0.5 * getRem(),
      },
    },
  });

  window.addEventListener("resize", () => {
    mainMenuSwiper.update();
  });

  const bDayKafeSwiper = new Swiper(".b-day-kafe .main-menu__slide", {
    slidesPerView: "auto",
    spaceBetween: 0.25 * getRem(),
    slidesOffsetBefore: 1 * getRem(),
    slidesOffsetAfter: 1 * getRem(),
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".b-day-kafe .c-title__arrow--next",
      prevEl: ".b-day-kafe .c-title__arrow--prev",
    },

    breakpoints: {
      992: {
        slidesOffsetBefore: 7.5 * getRem(),
        slidesOffsetAfter: 7.5 * getRem(),
        spaceBetween: 0.5 * getRem(),
      },
    },
  });

  window.addEventListener("resize", () => {
    bDayKafeSwiper.update();
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

  const bDayAnimSwiper = new Swiper(".b-day-anim__slider", {
    slidesPerView: "auto",
    spaceBetween: -0.6 * getRem(),
    slidesOffsetBefore: 1 * getRem(),
    slidesOffsetAfter: 1 * getRem(),

    breakpoints: {
      992: {
        spaceBetween: -2.5 * getRem(),
        slidesOffsetBefore: 7.5 * getRem(),
        slidesOffsetAfter: 7.5 * getRem(),
      },
    },
  });

  window.addEventListener("resize", () => {
    bDayAnimSwiper.update();
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

  const bDayUslugiSwiper = new Swiper(".b-day-uslugi__slide", {
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
      nextEl: ".b-day-uslugi .c-title__arrow--next",
      prevEl: ".b-day-uslugi .c-title__arrow--prev",
    },

    breakpoints: {
      992: {
        slidesOffsetBefore: 7.5 * getRem(),
        slidesOffsetAfter: 7.5 * getRem(),
      },
    },
  });

  window.addEventListener("resize", () => {
    bDayUslugiSwiper.update();
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
    const button = header.querySelector(".header__burger");
    let scrollPosition = 0;

    button.addEventListener("click", () => {
      const isActive = header.classList.toggle("header--mobile-menu-active");

      if (isActive) {
        // сохраняем позицию
        scrollPosition = window.pageYOffset;

        // блокируем скролл
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = "100%";
      } else {
        // возвращаем скролл
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";

        window.scrollTo(0, scrollPosition);
      }
    });
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
