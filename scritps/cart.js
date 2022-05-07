import {navbar} from '../components/header.js'
import {footer} from '../components/footer.js'

document.getElementById('header').innerHTML=navbar();
document.getElementById('footer').innerHTML=footer();

//header
function openNav() {
    document.getElementById("sideBar").style.display = "block";
    document.getElementById("sideBar").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("sideBar").style.display = "none";
  }

  document.getElementById('humburger').addEventListener('click',()=>{
    openNav();
  });
  document.getElementById('closebtn').addEventListener('click',()=>{
    closeNav();
  });

  // show item in cart
  //cart
  let cartData = JSON.parse(localStorage.getItem('BagData'));
  console.log(cartData.length);
  document.getElementById('TotalInCart').innerHTML=cartData.length;

let refno = Math.floor(Math.random()*10000);

let cart = document.getElementById('cartItem');

const display = (data)=>{
    cart.innerHTML=null;
    data.forEach((element,index) => {
    let div = document.createElement('div');
    div.id="cartAppendDiv"
    let rightDiv = document.createElement('div');
    rightDiv.id="rightDiv"
    let leftDiv = document.createElement('div');
    leftDiv.id="leftDiv"
    let imgDiv = document.createElement('div');
    let img = document.createElement('img');
    img.id="cartImg"
    img.src=element.image;

    imgDiv.append(img);

    let ref = document.createElement('p');
    ref.innerHTML="REF. |"+refno;
   let btnDiv = document.createElement('div');
    btnDiv.id="btnDiv"

   let leftbtn = document.createElement('button');
   leftbtn.innerHTML="-";
   leftbtn.addEventListener('click',()=>{
       decreaseQunt(index);
   })

   let num = document.createElement('p');
   num.id="btnNum"
   num.innerHTML=element.qunt;

   let rightbtn = document.createElement('button');
   rightbtn.innerHTML="+";
   rightbtn.addEventListener('click',()=>{
       incraseQunt(index);
   })
   btnDiv.append(leftbtn,num,rightbtn);

   let pri = document.createElement('p');
   pri.id="price"
   pri.innerHTML=element.price;

  let deletBtn = document.createElement('button');
  deletBtn.id="deletBtn"
  deletBtn.innerHTML="DELETE";
  deletBtn.addEventListener('click',()=>{
    delete_remove(index);
  })
  
  let color = document.createElement('p');
  color.innerText="Good Color"

  let size = document.createElement('p');

  size.innerHTML="Size"+":"+" "+"medium"
  rightDiv.append(imgDiv);
  leftDiv.append(ref,color,size,btnDiv,pri,deletBtn);

  div.append(rightDiv,leftDiv);

  cart.append(div);
});

}

display(cartData);

function showTotal(){
    var total =  cartData.reduce(function(acc,elem){
    return acc+(elem.price*elem.qunt);
},0);

document.getElementById("totalPriceh3").innerHTML="Total Price"+" "+" "+total;
}
showTotal();


  const decreaseQunt=(index)=>{
      cartData[index].qunt--;
      console.log(cartData); 
      localStorage.setItem("BagData",JSON.stringify(cartData));
      display(cartData);   
      window.location.reload();
    }

 const incraseQunt =(index)=>{
    cartData[index].qunt++;
    console.log(cartData); 
    localStorage.setItem("pankajData",JSON.stringify(cartData));
    display(cartData);   
    // window.location.reload();
    showTotal();
 }

 const delete_remove=(element,index)=>{
    console.log(element,index)
    cartData.splice(index,1);
    localStorage.setItem('BagData',JSON.stringify(cartData));
    window.location.reload();
 }



 const goTocheck = ()=>{
     window.location.href="processPaytm.html"
 }
 document.getElementById('continue').addEventListener('click',()=>{
    goTocheck();
})


let nam = document.getElementById('headerName');
let user = JSON.parse(localStorage.getItem('userData'));
user.forEach((el)=>{
   nam.innerHTML = el.nam
})