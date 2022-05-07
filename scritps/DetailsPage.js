import {navbar} from '../components/header.js'
import {footer} from '../components/footer.js'

document.getElementById('header').innerHTML=navbar();
document.getElementById('footer').innerHTML=footer();

let data = JSON.parse(localStorage.getItem('DetailsData'))||[];

let DetailsData = document.getElementById('DetailsData')
let clothes = document.getElementById('clothesName')
let price = document.getElementById('price')
let addBtn = document.getElementById('add_btn');
const one = (data)=>{
    DetailsData.innerHTML=null;
    data.forEach(element => {
        let div = document.createElement('div');
  
       let div1 = document.createElement('div')
       
        let img = document.createElement('img');
        img.src=element.image
  
        // let name=document.createElement('p');
        clothes.innerHTML=element.name
  
        // let pri = document.createElement('p');
        price.innerHTML="₹"+" "+element.price;
  
        div1.append(img);
  
        div.append(div1)
        DetailsData.append(div);
       addBtn.addEventListener('click',()=>{
      goToBag(element);
  })
    });
  }
  one(data);

  
  // let bagArr =JSON.parse(localStorage.getItem('BagData'))||[];
  let bagArr = [];
  const goToBag = (element)=>{
    element.qunt=1;
    bagArr.push(element);
    localStorage.setItem('BagData',JSON.stringify(bagArr));
    window.location.href="cart.html"
  }


  function openNav() {
    document.getElementById("sideBar").style.display = "block";
    document.getElementById("sideBar").style.width = "250px";
  }
  
  function closeNav() {
    // alert('hy');

    document.getElementById("sideBar").style.display = "none";
  }

  document.getElementById('humburger').addEventListener('click',()=>{
    openNav();
  });
  document.getElementById('closebtn').addEventListener('click',()=>{
    closeNav();
  });

  let nam = document.getElementById('headerName');
let user = JSON.parse(localStorage.getItem('userData'));
user.forEach((el)=>{
   nam.innerHTML = el.nam
})