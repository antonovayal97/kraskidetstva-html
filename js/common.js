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
  const swipers = [];

  function initSwiper(selector, options) {
    const element = document.querySelector(selector);
    if (!element) return null;

    const swiper = new Swiper(selector, options);
    swipers.push(swiper);
    return swiper;
  }

  // ====== Инициализация ======

  initSwiper(".main-park__slider", {
    slidesPerView: "auto",
    spaceBetween: 0.5 * getRem(),
    slidesOffsetBefore: 1 * getRem(),
    slidesOffsetAfter: 1 * getRem(),
    pagination: { el: ".swiper-pagination", clickable: true },
    breakpoints: {
      781: {
        spaceBetween: 0,
        enabled: false,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
      },
    },
  });

  initSwiper(".main-menu .main-menu__slide", {
    slidesPerView: "auto",
    spaceBetween: 0.25 * getRem(),
    slidesOffsetBefore: 1 * getRem(),
    slidesOffsetAfter: 1 * getRem(),
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".main-menu .c-title__arrow--next",
      prevEl: ".main-menu .c-title__arrow--prev",
    },
    breakpoints: {
      781: {
        slidesOffsetBefore: 7.5 * getRem(),
        slidesOffsetAfter: 7.5 * getRem(),
        spaceBetween: 0.5 * getRem(),
      },
    },
  });

  initSwiper(".b-day-kafe .main-menu__slide", {
    slidesPerView: "auto",
    spaceBetween: 0.25 * getRem(),
    slidesOffsetBefore: 1 * getRem(),
    slidesOffsetAfter: 1 * getRem(),
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".b-day-kafe .c-title__arrow--next",
      prevEl: ".b-day-kafe .c-title__arrow--prev",
    },
    breakpoints: {
      781: {
        slidesOffsetBefore: 7.5 * getRem(),
        slidesOffsetAfter: 7.5 * getRem(),
        spaceBetween: 0.5 * getRem(),
      },
    },
  });

  initSwiper(".b-day-park__slide", {
    slidesPerView: "auto",
    spaceBetween: 1.5 * getRem(),
    slidesOffsetBefore: 1 * getRem(),
    slidesOffsetAfter: 1 * getRem(),
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".b-day-park .c-title__arrow--next",
      prevEl: ".b-day-park .c-title__arrow--prev",
    },
    breakpoints: {
      781: {
        slidesOffsetBefore: 7.5 * getRem(),
        slidesOffsetAfter: 7.5 * getRem(),
      },
    },
  });

  initSwiper(".b-day-anim__slider", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: -0.6 * getRem(),
    slidesOffsetBefore: 1 * getRem(),
    slidesOffsetAfter: 1 * getRem(),
    speed: 8000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    allowTouchMove: false,
    breakpoints: {
      781: {
        spaceBetween: -2.5 * getRem(),
        slidesOffsetBefore: 7.5 * getRem(),
        slidesOffsetAfter: 7.5 * getRem(),
      },
    },
  });

  initSwiper(".main-uslugi__slide", {
    slidesPerView: "auto",
    spaceBetween: 0.5 * getRem(),
    slidesOffsetBefore: 1 * getRem(),
    slidesOffsetAfter: 1 * getRem(),
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".main-uslugi .c-title__arrow--next",
      prevEl: ".main-uslugi .c-title__arrow--prev",
    },
    breakpoints: {
      781: {
        slidesOffsetBefore: 7.5 * getRem(),
        slidesOffsetAfter: 7.5 * getRem(),
      },
    },
  });

  initSwiper(".b-day-uslugi__slide", {
    slidesPerView: "auto",
    spaceBetween: 0.5 * getRem(),
    slidesOffsetBefore: 1 * getRem(),
    slidesOffsetAfter: 1 * getRem(),
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".b-day-uslugi .c-title__arrow--next",
      prevEl: ".b-day-uslugi .c-title__arrow--prev",
    },
    breakpoints: {
      781: {
        slidesOffsetBefore: 7.5 * getRem(),
        slidesOffsetAfter: 7.5 * getRem(),
      },
    },
  });

  // ====== Resize ======

  window.addEventListener("resize", () => {
    swipers.forEach((swiper) => swiper.update());
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
    let content = faq.querySelector(".faq__block-content");

    title.addEventListener("click", () => {
      if (faq.classList.contains("faq__block--active")) {
        // закрытие
        content.style.height = content.scrollHeight + "px";

        requestAnimationFrame(() => {
          content.style.height = "0px";
          content.style.opacity = "0";
        });

        faq.classList.remove("faq__block--active");
      } else {
        // открытие
        faq.classList.add("faq__block--active");

        content.style.height = content.scrollHeight + "px";
        content.style.opacity = "1";
      }
    });
  });

  if (typeof init_stars === "function") {
    init_stars();
  }
});
