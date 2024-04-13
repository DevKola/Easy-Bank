"use strict";

const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const nav = document.getElementById("nav-cont");
const feature = document.getElementById("feature-box");

openBtn.addEventListener("click", () => {
  nav.style.top = "-10rem";
});

closeBtn.addEventListener("click", () => {
  nav.style.top = "-40rem";
});

