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



let data_3 = [];
let w3_1 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/3570/931/630/2/w/1239/3570931630_9_1_1.jpg?ts=1651163512834','SHIRT WITH CUTWORK EMBROIDERY','2890.00');
data_3.push(w3_1);
let frstImage = document.getElementById('image_3');
one(data_3,frstImage);


let data_4 = [];
let data_4_1 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/3583/931/630/2/w/452/3583931630_2_6_1.jpg?ts=1651146659361','DRESS WITH CUTWORK EMBROIDERY',' 4990.00');
let data_4_2 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/3317/939/630/2/w/452/3317939630_1_1_1.jpg?ts=1651146643338','GATHERED LINEN-BLEND SKIRT','1990.00');

data_4.push(data_4_1,data_4_2);
let image4 = document.getElementById('image_4');
one(data_4,image4);


let data_5 = [];
let data_5_1 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/8372/067/630/2/w/607/8372067630_1_1_1.jpg?ts=1651163267869','MINI LINEN DRESS','2890.00');
data_5.push(data_5_1);
let image5 = document.getElementById('image_5');
one(data_5,image5);


let data_6 = [];
let data_6_1 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/2143/047/640/2/w/294/2143047640_6_1_1.jpg?ts=1651055935500','LOOSE-FITTING SHIRT WITH..','2990.00');
let data_6_2 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/2417/771/620/2/w/294/2417771620_6_1_1.jpg?ts=1649845049991','HIGH WAISTED SHORTS','2890.00');
let data_6_3 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/4786/050/250/2/w/294/4786050250_6_1_1.jpg?ts=1644835085697','CROCHET DETAIL SHIRT','2,990.00');
let data_6_4 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/3296/922/250/2/w/294/3296922250_6_1_1.jpg?ts=1649405179340','EMBROIDERED BUTTONED SHORTS','3990.00');

data_6.push(data_6_1,data_6_2,data_6_3,data_6_4);
let image6 = document.getElementById('image_6');
one(data_6,image6);

let data7 = [];
let data7_1 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/1478/042/251/2/w/850/1478042251_1_1_1.jpg?ts=1651056557934','STRAIGHT TAILORED TROUSERS','3990.00');
data7.push(data7_1);
let image7 = document.getElementById('image_7');
one(data7,image7);


let data8 = [];
let data8_1 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/3666/106/620/2/w/452/3666106620_2_1_1.jpg?ts=1651056578089','SATIN SHIRT','2590.00');
let data8_2 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/1608/124/620/2/w/452/1608124620_1_1_1.jpg?ts=1651056560336','MASCULINE WIDE-LEG TROUSERS','2990.00');
data8.push(data8_1,data8_2);
let image8 = document.getElementById('image_8');
one(data8,image8)

let data9 = [];
let data9_1 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/3630/243/630/2/w/607/3630243630_1_1_1.jpg?ts=1651056577936','FLORAL PRINT SHIRT DRESS','2990.00');
data9.push(data9_1);
let image9 = document.getElementById('image_9');
one(data9,image9);

let data10 = [];
let data10_1 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/2417/771/620/2/w/607/2417771620_2_2_1.jpg?ts=1650885000023','HIGH WAISTED SHORTS','2890.00');
data10.push(data10_1);
let image10 = document.getElementById('image_10');
one(data10,image10);

let data11 = [];
let data11_1 = new newManData('https://static.zara.net/photos///2022/V/1/1/p/6336/910/102/2/w/1239/6336910102_9_1_1.jpg?ts=1651073590554','FABRIC ©BRIA NICOLE CASE','2990.00');
data11.push(data11_1);
let image11 = document.getElementById('image_11');
one(data11,image11);

let data12=[];
let data12_1 = new newManData('https://static.zara.net/photos///2022/V/1/1/p/6336/910/102/2/w/452/6336910102_15_1_1.jpg?ts=1651066000989','FABRIC ©BRIA NICOLE CASE','2990.00');
let data12_2 = new newManData('https://static.zara.net/photos///2022/V/1/1/p/6335/910/102/2/w/452/6335910102_15_1_1.jpg?ts=1651065403028','MINI FABRIC ©BRIA NICOLE CASE','2890.00');
let data12_3 = new newManData('https://static.zara.net/photos///2022/V/1/1/p/6337/910/102/2/w/452/6337910102_15_1_1.jpg?ts=1651066862413','FABRIC ©BRIA NICOLE TOTE BAG','2990.00');

data12.push(data12_1,data12_2,data12_3);
let image12 = document.getElementById('image_12');
one(data12,image12);

let data13 = [];
let data13_1 = new newManData('https://static.zara.net/photos///2022/V/1/1/p/6335/910/102/2/w/1239/6335910102_9_1_1.jpg?ts=1651073590929','MINI FABRIC ©BRIA NICOLE CASE','2890.00');
data13.push(data13_1);
let image13 = document.getElementById('image_13');
one(data13,image13);

let data14=[];
let data14_1 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/0858/029/066/2/w/452/0858029066_1_1_1.jpg?ts=1650989991641','STRIPED BUTTONED TOP',' 1890.00');
let data14_2 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/0858/027/066/2/w/452/0858027066_1_1_1.jpg?ts=1650989974366','LINEN T-SHIRT',' 1990.00');

data14.push(data14_1,data14_2);
let image14 = document.getElementById('image_14');
one(data14,image14);

//data15
let data15_left = [];
let data15_left_1 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/1131/104/800/2/w/607/1131104800_1_1_1.jpg?ts=1651073539130','TOP WITH ASYMMETRIC HEM','1590.00');
data15_left.push(data15_left_1);
let image15_left = document.getElementById('image_15-left');
one(data15_left,image15_left);


let data15_top=[];
let data15_top_1 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/1131/104/420/2/w/267/1131104420_1_1_1.jpg?ts=1651073515324','TOP WITH ASYMMETRIC..','1590.00');
let data15_top_2 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/1131/107/420/2/w/267/1131107420_2_2_1.jpg?ts=1651073516636','MINI SKIRT',' 1590.00');

data15_top.push(data15_top_1,data15_top_2);

let image15_top = document.getElementById('image_15_rigth_top');
one(data15_top,image15_top);


let data15_bottom=[];
let data15_bottom_1 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/1131/107/712/2/w/267/1131107712_1_1_1.jpg?ts=1651073534634','MINI SKIRT','1590.00');

let data15_bottom_2 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/1131/104/712/2/w/267/1131104712_1_1_1.jpg?ts=1651073537769','TOP WITH ASYMMETRIC..',' 1590.00');

data15_bottom.push(data15_bottom_1,data15_bottom_2);
let image15_bottom= document.getElementById('image_15_rigth_bottom');
one(data15_bottom,image15_bottom);



//data -19
let data_19 = [];
let data_19_1= new newManData('https://static.zara.net/photos///2022/V/0/1/p/1165/332/800/2/w/850/1165332800_1_1_1.jpg?ts=1650971140735','SATIN FLARED JUMPSUIT','4990.00');
let data_19_2 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/3496/636/800/2/w/449/3496636800_1_1_1.jpg?ts=1650971141495','BERMUDA SHORTS WITH CUT-OUT WAIST','2890.00');
let data_19_3 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/0387/066/800/2/w/449/0387066800_1_1_1.jpg?ts=1650971141295','DRESS WITH SWEETHEART NECKLINE','2990.00');
let data_19_4 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/3438/791/800/2/w/850/3438791800_1_1_1.jpg?ts=1650971142427','OVERSIZE SATIN BLAZER','6990.00');
let data_19_5 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/3593/583/330/2/w/850/3593583330_1_1_1.jpg?ts=1650983297679','CONTRASTING WRAP DRESS','3990.00');
let data_19_6 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/3514/229/330/2/w/449/3514229330_1_1_1.jpg?ts=1650983296715','CUT-OUT TROPICAL PRINT DRESS','3990.00');
let data_19_7 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/0387/055/630/2/w/449/0387055630_1_1_1.jpg?ts=1650971140336','DOUBLE-BREASTED BLAZER-STYLE PLAYSUIT WITH BUCKLE','5590.00');
let data_19_8 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/3431/512/630/12/w/449/3431512630_1_1_1.jpg?ts=1651060552068','SKINNY TROUSERS WITH SPLIT HEM','2990.00');

data_19.push(data_19_1,data_19_2,data_19_3,data_19_4,data_19_5,data_19_6,data_19_7,data_19_8);
let image19= document.getElementById('image_19');
one(data_19,image19);

let data_16 = [];
let data_16_1 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/3277/921/250/2/w/1239/3277921250_9_1_1.jpg?ts=1649662548430','SHORT RUFFLED DRESS','3990.00');
data_16.push(data_16_1);
let image16= document.getElementById('image_16');
one(data_16,image16);


let data_17 = [];
let data_17_1 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/4786/050/250/13/w/452/4786050250_2_3_1.jpg?ts=1651080352049','CROCHET DETAIL SHIRT','2990.00');
let data_17_2 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/4786/053/250/13/w/452/4786053250_1_1_1.jpg?ts=1650896137507','CROCHET SHORTS','2990.00');
data_17.push(data_17_1,data_17_2);
let image17= document.getElementById('image_17');
one(data_17,image17);


let data_18 = [];
let data_18_1 = new newManData('https://static.zara.net/photos///2022/V/1/1/p/2331/010/033/2/w/449/2331010033_15_1_1.jpg?ts=1650989094873','STRAPPY PLATFORM HEEL SANDALS','6990.00');
let data_18_2 = new newManData('https://static.zara.net/photos///2022/V/1/1/p/2332/010/060/2/w/449/2332010060_15_1_1.jpg?ts=1651044704401','STRAPPY PLATFORM HEEL SANDALS','6990.00');
data_18.push(data_18_1,data_18_2);
let image18= document.getElementById('image_18');
one(data_18,image18);




// Main Womens Data
let WomensData = [];
WomensData.push(data1,data_2,data_3,data_4,data_5,data_6,data7,data8,data9,data10,data11,data12,data13,data14,data15_left,data15_top,data15_bottom,data_19,data_16,data_17,data_18)

localStorage.setItem("WomensData",JSON.stringify(WomensData));


import { footer } from "../components/footer.js";
document.getElementById('footer').innerHTML=footer();