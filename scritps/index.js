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

let movieObj = [
  'https://static.zara.net/photos///contents/mkt/spots/ss22-north-woman-new/subhome-xmedia-17//w/1066/IMAGE-landscape-baa39082-7050-49bb-9309-f8544e76d2a0-default_0.jpg?ts=1651142892439',
  'https://static.zara.net/photos///contents/mkt/spots/ss22-north-woman-new/subhome-xmedia-13-2-in//w/1066/IMAGE-landscape-116bff2f-9a68-4dbc-9db4-88f1bb7a74e1-default_0.jpg?ts=1648724342119',
 'https://static.zara.net/photos///contents/mkt/spots/ss22-north-woman-shorts/subhome-xmedia-17//w/1066/IMAGE-landscape-b723e543-bcd4-4b61-9bb6-4e3699360b48-default_0.jpg?ts=1651142843964',
  'https://static.zara.net/photos///2022/V/1/1/p/1391/910/050/2/w/1239/1391910050_9_2_1.jpg?ts=1651831768891',
  'https://static.zara.net/photos///contents/mkt/spots/ss22-north-woman-new/subhome-xmedia-18-2//w/1066/IMAGE-landscape-0f4c04f4-0880-42ee-980d-5bd226591bc2-default_0.jpg?ts=1651741780115',
  `https://static.zara.net/photos///contents/mkt/spots/ss22-north-woman-join-life/subhome-xmedia-16//w/1066/IMAGE-landscape-9a27b5c5-76e8-404a-ba9a-31ee71be9229-default_0.jpg?ts=1650281186665`
];
let show = document.getElementById("mainContent");
function slideShow(){
  let i=0;

  setInterval(function(){
      show.innerHTML=null;
     if(i== movieObj.length){
         i=0;
     }
      let image= movieObj[i];
      let img = document.createElement("img")
      img.src=image
      show.append(img);
      i++;
  },1500)
}
slideShow();


let nam = document.getElementById('headerName');
let user = JSON.parse(localStorage.getItem('userData'));
user.forEach((el)=>{
   nam.innerHTML = el.nam
})