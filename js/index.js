$('.slider .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    dots: false,
    autoplayTimeout: 2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});


$('.slider2 .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: false,
    dots: true,
    autoplayTimeout: 2000,
    // animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});



// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




let startcount = 100;

let count1 = setInterval(() =>{
    document.querySelector("#h1").innerHTML = ++startcount;
    if (startcount === 245){
        clearInterval(count1);
    }
});

let startcount2 = 100;

let count2 = setInterval(() =>{
    document.querySelector("#h2").innerHTML = ++startcount2;
    if (startcount2 === 563){
        clearInterval(count2);
    }
});

let startcount3 = 100;

let count3 = setInterval(() =>{
    document.querySelector("#h3").innerHTML = ++startcount3;
    if (startcount3 === 114){
        clearInterval(count3);
    }
});

let startcount4 = 50;

let count4 = setInterval(() =>{
    document.querySelector("#h4").innerHTML = ++startcount4;
    if (startcount4 === 104){
        clearInterval(count4);
    }
});
