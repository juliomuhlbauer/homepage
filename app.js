window.addEventListener("scroll", (e) => {
  const nav = document.querySelector("header");
  if (window.pageYOffset > 0) {
    nav.classList.add("nav-shadow");
  } else {
    nav.classList.remove("nav-shadow");
  }
});
