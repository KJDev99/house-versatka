let openMenu = document.querySelector(".open_menu");
let closeMenu = document.querySelector(".close_menu");
let navList = document.querySelector(".nav_list");
let navBtn = document.querySelector(".nav_btn");

openMenu.addEventListener("click", () => {
  openMenu.classList.toggle("d-none");
  closeMenu.classList.toggle("d-none");
  navList.classList.toggle("nav_list-active");
  navBtn.classList.toggle("nav_btn-active");
});
closeMenu.addEventListener("click", () => {
  openMenu.classList.toggle("d-none");
  closeMenu.classList.toggle("d-none");
  navList.classList.toggle("nav_list-active");
  navBtn.classList.toggle("nav_btn-active");
});
