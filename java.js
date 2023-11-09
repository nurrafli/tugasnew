// INI UNTUK HAMBURGER MENU SIDEBAR
const navMenu = document.querySelector(".navmenu");

document.querySelector("#hamburger").onclick = () => {
  navMenu.classList.toggle("active");
};

// INI UNTUK MENGHILANGKAR SIDEBAR
const hamburger = document.querySelector("#hamburger");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});