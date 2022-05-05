function navbar(){
    return `
    <div id="navbar">
       
    <div id="zara">
        <div  id="humburger">&#9776;</div>  
        <div id="zaraLogo"> <a href="index.html">
                <img src="https://www.freepnglogos.com/uploads/zara-logo-png/zara-avrupa-logos-2020-desing--11.png" alt="zara logo" id="zaraImage">
              </a>
        </div>                 
    </div>
    <div id="navbarRight">
        <div id="NavbarSearch">SEARCH</div>
        <div><a href="login.html">LOGIN</a></div>
        <div>HELP</div>
        <div><a href="bag.html"><i class="fa-solid fa-bag-shopping"></i></a></div>
    </div>
</div>
  <div id="sideBar" class="sideBArNav">
  <a href="javascript:void(0)" id="closebtn">&times;</a>
    <div id="SideBar-hearder">
    <div> <a id="women" href="women.html">WOMAN</a></div>
    <div><a id="man" href="man.html">MAN</a></div>
    <div><a id="kid" href="kid.html">Kid</a></div>    
  </div>
  <div class="SideBar-listItem">
    <ul>
      <li><a href="man.html">NEW</a></li>
      <li><a href="man.html">ISLAND LIFE</a></li>
      <li><a href="man.html">BEST SELLERS NEW</a></li>
      <li> BLAZERS</li>
      <li>DRESSES | JUMPSUITS</li>
      <li>SHIRTS</li>
      <li>TROUSERS</li>
      <li>TOPS | CORSETS</li>
      <li>BODYSUITS</li>
      <li>T-SHIRTS</li>
      <li> JEANS</li>
      <li> SKIRTS</li>
      <li>SHORTS | SKORTS</li>
      <li> CO-ORD SETS</li>
      <li>SUITS</li>
      <li>BASICSNEW</li>
      <li>KNITWEAR</li>
      <li> SWEATSHIRTS</li>
      <li>COATS | TRENCH COATS</li>
      <li>JACKETS | OVERSHIRTS</li>
      <li>SHOES</li>
      <li>BAGS</li>
      <li>SWIMWEARNEW</li>
      <li> ACCESSORIES</li>
      <li> PERFUMES</li>
      <li>SPRING BREEZE</li>
      <li>SPECIAL PRICES</li>
      <li>SPECIAL EDITION</li>
      <li>JOIN LIFE</li>
  </ul>
  </div>   
</div>
    `
}

export {navbar}