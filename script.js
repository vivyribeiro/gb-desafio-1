/*  Open and close the menu when you click on the icon: menu and x*/
const nav = document.querySelector('#header nav ')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* When click on a menu's item, hide the menu */
const links = document.querySelectorAll('nav .desktop-links')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function searchFunction() {
  document.getElementById("searchDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter;
  input = document.getElementById("search-input");
  filter = input.value.toUpperCase();
  div = document.getElementById("searchDropdown");
}

/* Slideshow */
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide-image");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/* Slideshow  Products*/
var slideIndexProducts = 1;
showSlidesProducts(slideIndexProducts);

// Next/previous controls
function plusSlidesProducts(n) {
  showSlidesProducts(slideIndexProducts += n);
}

function showSlidesProducts(n) {
  var i;
  var slidesProducts = document.getElementsByClassName("slide-product");

  if (n > slidesProducts.length) {slideIndexProducts = 1}
  if (n < 1) {slideIndexProducts = slidesProducts.length}
  for (i = 0; i < slidesProducts.length; i++) {
      slidesProducts[i].style.display = "none";
  }

  slidesProducts[slideIndexProducts-1].style.display = "block";
}
