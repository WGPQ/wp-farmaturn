// (() => {
//   "use strict";
//   /**
//    * Easy selector helper function
//    */
//   const select = (el, all = false) => {
//     el = el.trim();
//     if (all) {
//       return [...document.querySelectorAll(el)];
//     } else {
//       return document.querySelector(el);
//     }
//   };

//   /**
//    * Easy event listener function
//    */
//   const on = (type, el, listener, all = false) => {
//     let selectEl = select(el, all);
//     if (selectEl) {
//       if (all) {
//         selectEl.forEach((e) => e.addEventListener(type, listener));
//       } else {
//         selectEl.addEventListener(type, listener);
//       }
//     }
//   };

//   /**
//    * Easy on scroll event listener
//    */
//   const onscroll = (el, listener) => {
//     el.addEventListener("scroll", listener);
//   };

//   /**
//    * Navbar links active state on scroll
//    */
//   let navbarlinks = select("#navbar .scrollto", true);
//   const navbarlinksActive = () => {
//     let position = window.scrollY + 200;
//     navbarlinks.forEach((navbarlink) => {
//       if (!navbarlink.hash) return;
//       let section = select(navbarlink.hash);
//       if (!section) return;
//       if (
//         position >= section.offsetTop &&
//         position <= section.offsetTop + section.offsetHeight
//       ) {
//         navbarlink.classList.add("active");
//       } else {
//         navbarlink.classList.remove("active");
//       }
//     });
//   };
//   window.addEventListener("load", navbarlinksActive);

//   onscroll(document, navbarlinksActive);

//   /**
//    * Scrolls to an element with header offset
//    */
//   const scrollto = (el) => {
//     let header = select("#header");
//     let offset = header.offsetHeight;
//     if (!header.classList.contains("header-scrolled")) {
//       offset -= 20;
//     }

//     let elementPos = select(el).offsetTop;
//     window.scrollTo({
//       top: elementPos - offset,
//       behavior: "smooth",
//     });
//   };

//   /**
//    * Toggle .header-scrolled class to #header when page is scrolled
//    */

//   setTimeout(() => {
//     let selectHeader = select("#header");

//     if (selectHeader) {
//       const headerScrolled = () => {
//         if (window.scrollY > 100) {
//           selectHeader.classList.add("header-scrolled");
//         } else {
//           selectHeader.classList.remove("header-scrolled");
//         }
//       };
//       onscroll(document, headerScrolled);
//     }
//   }, 500);

//   window.addEventListener("load", () => {
//     setTimeout(() => {
//       let selectHeader = select("#header");
//       if (selectHeader) {
//         if (window.scrollY > 100) {
//           selectHeader.classList.add("header-scrolled");
//         } else {
//           selectHeader.classList.remove("header-scrolled");
//         }
//       }
//     }, 500);
//   });

//   /**
//    * Back to top button
//    */

//   setTimeout(() => {
//     let backtotop = select(".back-to-top");
//     if (backtotop) {
//       const toggleBacktotop = () => {
//         if (window.scrollY > 100) {
//           backtotop.classList.add("active");
//         } else {
//           backtotop.classList.remove("active");
//         }
//       };
//       onscroll(document, toggleBacktotop);
//     }
//   }, 500);

//   window.addEventListener("load", () => {
//     let backtotop = select(".back-to-top");
//     setTimeout(() => {
//       if (backtotop) {
//         if (window.scrollY > 100) {
//           backtotop.classList.add("active");
//         } else {
//           backtotop.classList.remove("active");
//         }
//       }
//     }, 500);
//   });

//   /**
//    * Mobile nav toggle
//    */
//   setTimeout(() => {
//     on("click", ".mobile-nav-toggle", function (e) {
//       select("#navbar").classList.toggle("navbar-mobile");
//       this.classList.toggle("bi-list");
//       this.classList.toggle("bi-x");
//     });
//   }, 500);
//   /**
//    * Mobile nav dropdowns activate
//    */
//   setTimeout(() => {
//     on(
//       "click",
//       ".navbar .dropdown > a",
//       function (e) {
//         if (select("#navbar").classList.contains("navbar-mobile")) {
//           e.preventDefault();
//           this.nextElementSibling.classList.toggle("dropdown-active");
//         }
//       },
//       true
//     );
//   }, 500);

//   /**
//    * Scrool with ofset on links with a class name .scrollto
//    */
//   setTimeout(() => {
//     on(
//       "click",
//       ".scrollto",
//       function (e) {
//         if (select(this.hash)) {
//           e.preventDefault();
//           let navbar = select("#navbar");
//           if (navbar.classList.contains("navbar-mobile")) {
//             navbar.classList.remove("navbar-mobile");
//             let navbarToggle = select(".mobile-nav-toggle");
//             navbarToggle.classList.toggle("bi-list");
//             navbarToggle.classList.toggle("bi-x");
//           }
//           scrollto(this.hash);
//         }
//       },
//       true
//     );
//   }, 500);

//   /**
//    * Scroll with ofset on page load with hash links in the url
//    */
//   window.addEventListener("load", () => {
//     setTimeout(() => {
//       if (window.location.hash) {
//         if (select(window.location.hash)) {
//           scrollto(window.location.hash);
//         }
//       }
//     }, 500);
//   });

//   /**
//    * Preloader
//    */

//   window.addEventListener("load", () => {
//     setTimeout(() => {
//       let preloader = select("#preloader");
//       if (preloader) {
//         preloader.remove();
//       }
//     }, 500);
//   });
//   /**
//    * Initiate glightbox
//    */
//   const glightbox = GLightbox({
//     selector: ".glightbox",
//   });

//   /**
//    * Initiate gallery lightbox
//    */
//   const galleryLightbox = GLightbox({
//     selector: ".gallery-lightbox",
//   });

//   /**
//    * Testimonials slider
//    */
//   new Swiper(".testimonials-slider", {
//     speed: 600,
//     loop: true,
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false,
//     },
//     slidesPerView: "auto",
//     pagination: {
//       el: ".swiper-pagination",
//       type: "bullets",
//       clickable: true,
//     },
//   });

//   /**
//    * Animation on scroll
//    */
window.addEventListener("load", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
});

//   /**
//    * Initiate Pure Counter
//    */
new PureCounter();
// })();
