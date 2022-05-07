
document.querySelector("#Create_Account").addEventListener("submit",signup)

var signupArr = JSON.parse(localStorage.getItem("userData"))||[];

function signup(){
    event.preventDefault();

var email=document.querySelector("#email").value;
var password=document.querySelector("#password").value;
var nam=document.querySelector("#name").value;
var address=document.querySelector("#address").value;
var locality =document.querySelector("#locality").value;
var state = document.querySelector("#state").value;
var no = document.querySelector("#no").value;
console.log(email,password,nam,address,locality,state,no)

var signupObj={
    email,
    password,
    nam,
    address,
    locality,
    state,
    no,

};
signupArr.push(signupObj);
console.log(signupArr)
localStorage.setItem("userData",JSON.stringify(signupArr))
alert("Creation Successful")
var email=document.querySelector("#email").value="";
var password=document.querySelector("#password").value="";
var nam=document.querySelector("#name").value="";
var address=document.querySelector("#address").value="";
var locality =document.querySelector("#locality").value="";
var state = document.querySelector("#state").value="";
var no = document.querySelector("#no").value="";
}

document.getElementById('company').addEventListener('click',()=>{
    document.getElementById('company_Account').style.display="block";
    document.getElementById('personal_Account').style.display="none"
})

document.getElementById('personal').addEventListener('click',()=>{
    document.getElementById('company_Account').style.display="none";
    document.getElementById('personal_Account').style.display="block"
})