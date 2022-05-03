import {navbar} from '../components/header.js'
document.getElementById('header').innerHTML=navbar();




function openNav() {
   document.getElementById("sideBar").style.display="block"
   document.getElementById("sideBar").style.width = "250px";
   console.log("hy");
 }
 
 function closeNav() {
   document.getElementById("sideBar").style.display = "none";
 }

//
document.getElementById("humburger").addEventListener("click",function(){
    openNav();
})
document.getElementById('sideBar').addEventListener("click",function(){
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