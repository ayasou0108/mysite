'use strict';
{
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
  });


const closeButton = document.getElementById('mobileClose');

closeButton.addEventListener('click', () => {
  mobileNav.classList.remove('active');
});


// メニューをどれか押すと閉じる
const mobileLinks = document.querySelectorAll(".mobile__nav-item a");

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });
});


}
