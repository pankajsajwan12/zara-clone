import {navbar} from '../components/header.js'
import {footer} from '../components/footer.js'

document.getElementById('header').innerHTML=navbar();
document.getElementById('footer').innerHTML=footer();

let cartArr= [];
let BagItem = JSON.parse(localStorage.getItem('BagData'));

const BagData = (data)=>{
    DetailsData.innerHTML=null;
    data.forEach(element => {
        let div = document.createElement('div');
  
       let div1 = document.createElement('div')
       
        let img = document.createElement('img');
        img.src=element.image
  
        let div2 = document.createElement('div');
        let name=document.createElement('p');
        name.id="bagDressName"
        name.innerHTML=element.name
  
        let pri = document.createElement('p');
        pri.innerHTML="₹"+" "+element.price;
  
        let btn = document.createElement('button');
       
        div2.append(name,pri);
  
        div1.append(img);
  
        div.append(div1)
        DetailsData.append(div,div2);
        div.addEventListener("click",function(){
            cartArr.push(element);
            localStorage.setItem("cartData",JSON.stringify(cartArr));
            window.location.href="cart.html";
          })
    });
  }

  BagData(BagItem);


  