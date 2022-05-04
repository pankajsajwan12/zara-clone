document.querySelector("form").addEventListener("submit",Loginfun)
    
var login=JSON.parse(localStorage.getItem("userData"))
function Loginfun(){

    var mail= document.querySelector("#mail").value;
    var pass=document.querySelector("#password").value;
let flag = false;
for(var i=0;i<login.length;i++){
    //console.log(login[i]);
    if((login[i].email==mail)&&(login[i].password==pass)){
        flag=true;
        break;
    }
   
  }

  if(flag==true){
    alert("Login Successful!")
}
else{
    alert("login Fail!")
}

}

document.getElementById('btn').addEventListener('click',()=>{
    //   createAccount();
    window.location.href="createAccount.html"
})