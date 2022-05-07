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

let w1 =  new newManData('https://static.zara.net/photos///2022/V/0/1/p/3918/420/439/34/w/1205/3918420439_13_1_1.jpg?ts=1650456555880','OVERSIZE TECHNICAL PARKA','8990.00')

data1.push(w1);
let firstImage = document.getElementById('firstImage');
one(data1,firstImage);

let data_2 = [];
let w2_1 = new newManData('https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013','OVERSIZE TECHNICAL PARKA','8990.00');
let w2_2 = new newManData('https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013','OVERSIZE TECHNICAL PARKA',' 8990.00');

data_2.push(w2_1,w2_2);
let twoImage = document.getElementById('twoImage');
one(data_2,twoImage);



let data_3 = [];
let w3_1 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/2553/417/251/35/w/1205/2553417251_15_1_1.jpg?ts=1650470774279','BALLOON FIT TROUSERS','4990.00');
data_3.push(w3_1);
let frstImage = document.getElementById('image_3');
one(data_3,frstImage);


let data_4 = [];
let data_4_1 =  new newManData('https://static.zara.net/photos///2022/V/0/1/p/2553/417/251/32/w/513/2553417251_1_1_1.jpg?ts=1650528268896','BALLOON FIT TROUSERS','4990.00');
let data_4_2 =  new newManData('https://static.zara.net/photos///2022/V/0/2/p/6048/084/400/32/w/513/6048084400_1_1_1.jpg?ts=1650378281990','STRIPED TEXTURED SHIRT','2990.00');;

data_4.push(data_4_1,data_4_2);
let image4 = document.getElementById('image_4');
one(data_4,image4);


let data_5 = [];
let data_5_1 =  new newManData('https://www.zara.com/in/en/balloon-fit-trousers-p02553417.html?v1=181605722&v2=2032934','BALLOON FIT TROUSERS','4990.00');
data_5.push(data_5_1);
let image5 = document.getElementById('image_5');
one(data_5,image5);


let data_6 = [];
let data_6_1 =new newManData('https://static.zara.net/photos///2022/V/0/1/p/2553/417/251/32/w/513/2553417251_1_1_1.jpg?ts=1650528268896','BALLOON FIT TROUSERS','4990.00');
let data_6_2 =  new newManData('https://static.zara.net/photos///2022/V/0/2/p/6048/084/400/32/w/513/6048084400_1_1_1.jpg?ts=1650378281990','STRIPED TEXTURED SHIRT','2990.00');
let data_6_3 =new newManData('https://static.zara.net/photos///2022/V/0/2/p/3918/422/505/32/w/513/3918422505_2_1_1.jpg?ts=1650378281459','TECHNICAL PARKA WITH POUCH POCKET','6990.00');
let data_6_4 =new newManData('https://static.zara.net/photos///2022/V/0/1/p/3918/422/505/32/w/513/3918422505_1_1_1.jpg?ts=1650444837903','TECHNICAL PARKA WITH POUCH POCKET','6990.00');

data_6.push(data_6_1,data_6_2,data_6_3,data_6_4);
let image6 = document.getElementById('image_6');
one(data_6,image6);

let data7 = [];
let data7_1 = new newManData('https://www.zara.com/in/en/technical-parka-with-pouch-pocket-p03918422.html?v1=181502589&v2=2032934','TECHNICAL PARKA WITH POUCH POCKET','6990.00');
data7.push(data7_1);
let image7 = document.getElementById('image_7');
one(data7,image7);


let data8 = [];
let data8_1 =  new newManData('https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013','OVERSIZE TECHNICAL PARKA',' 8990.00');
let data8_2 = new newManData('https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013','CARROT FIT TROUSERS','4990.00');
data8.push(data8_1,data8_2);
let image8 = document.getElementById('image_8');
one(data8,image8)

let data9 = [];
let data9_1 =new newManData('https://static.zara.net/photos///2022/V/0/2/p/2675/370/612/32/w/590/2675370612_15_2_1.jpg?ts=1650466898785','OVERSHIRT WITH POCKETS','4990.00');
data9.push(data9_1);
let image9 = document.getElementById('image_9');
one(data9,image9);

let data10 = [];
let data10_1 = new newManData('https://static.zara.net/photos///2022/V/0/2/p/6917/442/612/2/w/373/6917442612_1_1_1.jpg?ts=1650450165287','POPLIN BERMUDA SHORTS WITH PLEATS','2990.00');
data10.push(data10_1);
let image10 = document.getElementById('image_10');
one(data10,image10);

let data11 = [];
let data11_1 = new newManData('https://static.zara.net/photos///2022/V/0/2/p/3918/422/505/2/w/373/3918422505_2_6_1.jpg?ts=1650450143084','TECHNICAL PARKA WITH POUCH POCKET',' 6990.00');
data11.push(data11_1);
let image11 = document.getElementById('image_11');
one(data11,image11);

let data12=[];
let data12_1 = new newManData('https://static.zara.net/photos///2022/V/0/2/p/4541/863/710/32/w/513/4541863710_1_1_1.jpg?ts=1650382410747','CHECK BLAZER',' 8990.00');
let data12_2 = new newManData('https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013','CHECK BLAZER','8990.00')
let data12_3 =  new newManData('https://static.zara.net/photos///2022/V/0/1/p/4541/863/710/33/w/725/4541863710_15_1_1.jpg?ts=1650452720105','CHECK BLAZER',' 8990.00');

data12.push(data12_1,data12_2,data12_3);
let image12 = document.getElementById('image_12');
one(data12,image12);

let data13 = [];
let data13_1 = new newManData('https://www.zara.com/in/en/leather-brogues-p12410920.html?v1=181502569&v2=2032934','LEATHER BROGUES','7990.00');
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

let data15 = [];
let mp1 = new newManData('https://static.zara.net/photos///2022/V/0/2/p/4540/862/401/2/w/373/4540862401_1_1_1.jpg?ts=1650451327241','TEXTURED DOUBLE-BREASTED BLAZER','8990.00');
let mp2= new newManData('https://static.zara.net/photos///2022/V/0/2/p/4489/965/500/2/w/373/4489965500_1_1_1.jpg?ts=1650450124548',`LINEN - COTTON BLEND SHIRT
`,'2990.00')
let mp3 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/0975/113/058/2/w/373/0975113058_1_1_1.jpg?ts=1650464563352','STRIPED SHIRT','2990.00');
let mp4 = new newManData('https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013','STRIPED T­SHIRT','1990.00');
let mp5 = new newManData('https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013','SLIM FIT CHINO TROUSERS','3990.00');
let mp6 = new newManData('https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013','PLEATED BERMUDA SHORTS',' 2990.00');
let mp7 = new newManData('https://static.zara.net/photos///2022/V/0/2/p/4489/965/250/2/w/373/4489965250_1_1_1.jpg?ts=1650464287302',`LINEN - COTTON BLEND SHIRT`,' 2990.00');
let mp8 = new newManData('https://static.zara.net/photos///2022/V/0/2/p/4489/965/600/2/w/373/4489965600_1_1_1.jpg?ts=1650463141814',`LINEN - COTTON BLEND SHIRT`,'2990.00');
let mp9 = new newManData('https://static.zara.net/photos///2022/V/0/2/p/4541/863/710/2/w/373/4541863710_1_1_1.jpg?ts=1650451313835','CHECK BLAZER','8990.00');
let mp10 = new newManData('https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013','PLEATED BERMUDA SHORTS','2990.00');
let mp11 = new newManData('https://static.zara.net/photos///2022/V/0/2/p/6917/470/306/2/w/373/6917470306_1_1_1.jpg?ts=1650464286424','SLIM FIT CHINO TROUSERS',' 3990.00');
let mp12 = new newManData('https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013','PLEATED BERMUDA SHORTS','2990.00');

data15.push(mp1,mp2,mp3,mp4,mp5,mp6,mp7,mp8,mp9,mp9,mp10,mp11,mp12);

let image15= document.getElementById('image_15');
one(data15,image15);


//data -19
let data_19 = [];
let data_19_1=  new newManData('https://static.zara.net/photos///2022/V/0/2/p/5568/429/401/2/w/283/5568429401_6_1_1.jpg?ts=1649084990381','JACQUARD TIE WITH BASEBALL MOTIF..','2590.00');
let data_19_2 =  new newManData('https://static.zara.net/photos///2022/V/0/2/p/5568/430/500/2/w/283/5568430500_6_1_1.jpg?ts=1650556576894','SURFER JACQUARD TIE','2590.00');
let data_19_3 = new newManData('https://static.zara.net/photos///2022/V/0/2/p/2253/400/401/2/w/283/2253400401_6_1_1.jpg?ts=1650616271195','JACQUARD TIE WITH INSECTS','JACQUARD TIE WITH INSECTS','2590.00');
let data_19_4 = new newManData('https://static.zara.net/photos///2022/V/0/2/p/7347/482/407/2/w/283/7347482407_6_1_1.jpg?ts=1649084990703','JACQUARD TIE WITH FISH','2590.00');

data_19.push(data_19_1,data_19_2,data_19_3,data_19_4);
let image19= document.getElementById('image_19');
one(data_19,image19);

let data_16 = [];
let data_16_1 = new newManData('https://static.zara.net/photos///2022/V/0/1/p/3277/921/250/2/w/1239/3277921250_9_1_1.jpg?ts=1649662548430','SHORT RUFFLED DRESS','3990.00');
data_16.push(data_16_1);
let image16= document.getElementById('image_16');
one(data_16,image16);


let data_17 = [];
let data_17_1 = new newManData('https://static.zara.net/photos///2022/V/1/1/p/3143/920/500/32/w/590/3143920500_1_1_1.jpg?ts=1650879773571','LEATHER CROSSBODY MAXI BAG','14990.00');
let data_17_2 = new newManData('https://static.zara.net/photos///2022/V/1/1/p/3143/920/500/33/w/437/3143920500_2_1_1.jpg?ts=1650885927158','LEATHER CROSSBODY MAXI BAG',' 14990.00')
let data_17_3 = new newManData("https://static.zara.net/photos///2022/V/1/1/p/3904/920/002/32/w/590/3904920002_1_1_1.jpg?ts=1650886210615",'EMBOSSED MOBILE PHONE CARRYING CASE','1590.00');
data_17.push(data_17_1,data_17_2,data_17_3);
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
WomensData.push(data1,data_2,data_3,data_4,data_5,data_6,data7,data8,data9,data10,data11,data12,data13,data14,data15,data_19,data_16,data_17,data_18)

localStorage.setItem("mensData",JSON.stringify(WomensData));


import {footer} from "../components/footer.js";
document.getElementById('footer').innerHTML=footer();


document.getElementById('humburger').addEventListener('click',()=>{
    openNav();
  });
  document.getElementById('closebtn').addEventListener('click',()=>{
    closeNav();
  });