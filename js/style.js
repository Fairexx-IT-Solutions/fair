var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n)
    // if(n <= 1) {
    //     showSlides(slideIndex += n);
    // } else{
    //     showSlides(slideIndex -= n);
    // }
  
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Test");
  var dots = document.getElementsByClassName("slideIcon");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 1; i < slides.length; i++) {
      slides[i].style.display = "none";
      
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}

//NavMenu controls
let Navshow = document.getElementsByClassName("nav-show");
let Navhide = document.getElementsByClassName("nav-hide");
let NavItems = document.getElementsByClassName("myNav")

function showMenu(){
  Navshow.style.display="none";
  Navhide.style.display="block";
  myNav.style.display="block";
}

function hideMenu(){
  Navhide.style.display="none";
  myNav.style.display="none";
  Navshow.style.display="block";
  
}

showMenu();
hideMenu();