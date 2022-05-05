import {navbar} from '../components/header.js'
document.getElementById('header').innerHTML=navbar();




function openNav() {
   document.getElementById("sideBar").style.display="block"
   document.getElementById("sideBar").style.width = "250px";
  }
  
  function closeNav() {
   document.getElementById("sideBar").style.display = "none";
 }

//
document.getElementById("humburger").addEventListener("click",function(){
    openNav();
})
document.getElementById('closebtn').addEventListener("click",function(){
   closeNav();
});


// shide show javascipt

var slideIndex = 0;
showSlides();

function showSlides() {
 var i;
 var slides = document.getElementsByClassName("mySlides");
 var dots = document.getElementsByClassName("dot");
 for (i = 0; i < slides.length; i++) {
   slides[i].style.display = "none";  
 }
 slideIndex++;
 if (slideIndex == slides.length){
   slideIndex = 1
 }    
 
 for (i = 0; i < dots.length; i++) {
   
   dots[i].className = dots[i].className.replace(" active", "");
   if(i == dots.length){
     i=0;
   }
 }
 slides[slideIndex-1].style.display = "block";  
 dots[slideIndex-1].className += " active";
 setTimeout(showSlides, 2000); 
}


//slideshow
let images = [
  `https://static.zara.net/photos///contents/mkt/spots/ss22-north-woman-new/subhome-xmedia-17//w/1066/IMAGE-landscape-baa39082-7050-49bb-9309-f8544e76d2a0-default_0.jpg?ts=1651142892439`,
  `https://static.zara.net/photos///contents/mkt/spots/ss22-north-woman-new/subhome-xmedia-13-2-in//w/1066/IMAGE-landscape-116bff2f-9a68-4dbc-9db4-88f1bb7a74e1-default_0.jpg?ts=1648724342119`,
  `https://static.zara.net/photos///contents/mkt/spots/ss22-north-woman-shorts/subhome-xmedia-17//w/1066/IMAGE-landscape-b723e543-bcd4-4b61-9bb6-4e3699360b48-default_0.jpg?ts=1651142843964`
  ]

  let slideshowContainer = document.getElementById('slideshow-container')
let i=0;

// setInterval(function(){
// if(i ==images.length)


// let image = images[i];

// let img = document.createElement('img');
// img.src = image

// container.append(img)
    
// i++;

// }, 3000);