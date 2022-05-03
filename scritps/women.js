import {navbar} from "../components/header.js";
document.getElementById('header').innerHTML=navbar();

import {one} from "../components/one.js";
console.log(one);
//object
function newManData (i,n,p){
    this.image=i;
    this.name=n;
    this.price=p;
}

//data
let mainWomenData = [];

let data1 = [];

let w1 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/4786/058/500/2/w/607/4786058500_2_3_1.jpg?ts=1644585974925','PRINTED MINI DRESS','2990.00')

data1.push(w1);
let firstImage = document.getElementById('firstImage');
one(data1,firstImage);

let data_2 = [];
let w2_1 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/4437/051/250/2/w/452/4437051250_1_1_1.jpg?ts=1650627295879','EMBROIDERED SHIRT DRESS',' 6990.00');
let w2_2 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/3312/799/800/2/w/452/3312799800_2_2_1.jpg?ts=1649407193520','CONTRAST SEMI-SHEER DRESS','3990.00');

data_2.push(w2_1,w2_2);
let twoImage = document.getElementById('twoImage');
one(data_2,twoImage);
