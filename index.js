const navBtn = document.querySelector("#js-navBtn");
const navLine = navBtn.querySelectorAll(".navBar-line");
const navList = document.querySelector(".navBar-list");
const navLogo = document.querySelector(".navBar-logo");
const navBar = document.querySelector(".navBar");

const ACTIVE = "active";
const CLEAR = "clearfix";

const sayHi = function () {
  navLine.forEach((e) => {
    e.classList.toggle(ACTIVE);
  });
  navList.classList.toggle(ACTIVE);
  navLogo.classList.toggle(ACTIVE);
  navBar.classList.toggle(ACTIVE);
};

navBtn.addEventListener("click", sayHi);
