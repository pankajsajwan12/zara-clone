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
        <div><i class="fa-solid fa-bag-shopping"></i></div>
    </div>
</div>
  <div id="sideBar" class="sideBArNav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <div id="SideBar-hearder">
    <div> <a id="women" href="women.html">WOMAN</a></div>
    <div><a id="man" href="men.html">MAN</a></div>
    <div><a id="kid" href="kid.html">Kid</a></div>    
  </div>
  <div class="SideBar-listItem">
    <ul>
      <li><a href="men.html">BEST SELLERSNEW</a></li>
      <li> <a href="men.html">BLAZERS</a></li>
      <li><a href="men.html">DRESSES | JUMPSUITS</a></li>
      <li><a href="men.html">SHIRTS</a></li>
      <li><a href="men.html">TROUSERS</a></li>
      <li><a href="men.html">TOPS | CORSETS</a></li>
      <li><a href="men.html">BODYSUITS</a></li>
      <li><a href="men.html">T-SHIRTS</a></li>
      <li> <a href="men.html">JEANS</a></li>
      <li> <a href="men.html">SKIRTS</a></li>
      <li><a href="men.html">SHORTS | SKORTS</a></li>
      <li> <a href="men.html">CO-ORD SETS</a></li>
      <li><a href="women.html">SUITS</a></li>
      <li><a href="women.html">BASICSNEW</a></li>
      <li><a href="women.html">KNITWEAR</a></li>
      <li> <a href="women.html">SWEATSHIRTS</a></li>
      <li><a href="women.html">COATS | TRENCH COATS</a></li>
      <li><a href="women.html">JACKETS | OVERSHIRTS</a></li>
      <li><a href="women.html">SHOES</a></li>
      <li><a href="women.html">BAGS</a></li>
      <li><a href="women.html">SWIMWEARNEW</a></li>
      <li> <a href="women.html">ACCESSORIES</a></li>
      <li> <a href="women.html">PERFUMES</a></li>
      <li><a href="women.html">SPRING BREEZE</a></li>
      <li><a href="women.html">SPECIAL PRICES</a></li>
      <li><a href="women.html">SPECIAL EDITION</a></li>
      <li><a href="women.html">JOIN LIFE</a></li>
  </ul>
  </div>   
</div>
    `
}

export {navbar}