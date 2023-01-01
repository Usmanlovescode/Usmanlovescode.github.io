
// ========================================
// Responsive navigation
// ========================================
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};
mobile_nav.addEventListener("click", () => toggleNavbar());

// ========================================
// sticky navigation
// ========================================
const sectionHero = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    console.log(ent);
    !ent.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  { root: null, threshold: 0, rootMargin: "-100px" }
);
observer.observe(sectionHero);
// ========================================
//  how to add media queries in JS
// ========================================
function myFunction(widthSize) {
  if (widthSize.matches) {
    const swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: { delay: 2500, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination", clickable: true },
    });
  } else {
    const swiper = new Swiper(".swiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay: { delay: 2500, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination", clickable: true },
    });
  }
}
const widthSize = window.matchMedia("(max-width: 780px)");
myFunction(widthSize);
widthSize.addListener(myFunction);

// ========================================
//  smooth scrolling
// ========================================
const portfolioSection = document.querySelector(".section-portfolio");
const contactSection = document.querySelector(".section-contact");
document.querySelector(".portfolio-link").addEventListener("click", (e) => {
  e.preventDefault();
  portfolioSection.scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".hireme-btn").addEventListener("click", (e) => {
  e.preventDefault();
  contactSection.scrollIntoView({ behavior: "smooth" });
});
// ========================================
// creating a portfolio tabbed component
// ========================================
const port_btn = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const img_div = document.querySelectorAll(".img-ovelay");

port_btn.addEventListener("click", (e) => {
  // console.log(e.target);

  // we will get which child element was clicked
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  if (!p_btn_clicked.classList.contains("p-btn")) return;
  // always remove the classList first then add the class
  p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
  // img_div.forEach((curElem) =>
  //   curElem.classList.remove("portfolio-image-active")
  // );

  p_btn_clicked.classList.add("p-btn-active");

  // to find the p-img class number of the images using the btn data attribute number

  const btn_num = p_btn_clicked.dataset.btnNum;
  // console.log(btn_num);

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
  // console.log(img_active);

  img_div.forEach((curElem) =>
    curElem.classList.add("portfolio-image-not-active")
  );

  img_active.forEach((curElem) =>
    curElem.classList.remove(`portfolio-image-not-active`)
  );
});

// ========================================
//  lazy loading section
// ========================================
const imgRef = document.querySelector("img[data-src]");
console.log(imgRef);
const lazyImg = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = imgRef.dataset.src;
};
const imgObserver = new IntersectionObserver(lazyImg, {
  root: null,
  threshold: 0,
});
imgObserver.observe(imgRef);
// ========================================
//  animated counter number
// ========================================
const workSection = document.querySelector(".section-work-data");
const workSectionObserve = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  console.log(entries);
  const counterNum = document.querySelectorAll(".counter-numbers");
  const speed = 200;
  counterNum.forEach((curNumber) => {
    const updateNumber = () => {
      const targetNumber = parseInt(curNumber.dataset.number);
      const initialNumber = parseInt(curNumber.innerText);
      const incrementNumber = Math.trunc(targetNumber / speed);
      if (initialNumber < targetNumber) {
        curNumber.innerText = `${initialNumber + incrementNumber}+`;
        setTimeout(updateNumber, 10);
      } else {
        curNumber.innerText = `${targetNumber}+`;
      }
    };
    updateNumber();
  });
};
const workSecObserver = new IntersectionObserver(workSectionObserve, {
  root: null,
  threshold: 0,
});
workSecObserver.observe(workSection);
//========================================
//  scroll to top button
// ========================================
let mybutton = document.getElementById("warp");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 320 ||
    document.documentElement.scrollTop > 320
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function gotoButton() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
