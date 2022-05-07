
const one = (data,container)=>{

  data.forEach(element => {
      let div = document.createElement('div');
     div.id="AppendDiv"

     let div1 = document.createElement('div')
     
      let img = document.createElement('img');
      img.id="imageId"
      img.src=element.image

      let div2 = document.createElement('div');
      div2.id="img-nameAndPrice"
      let name=document.createElement('p');
      name.id="DressName"
      name.innerHTML=element.name

      let pri = document.createElement('p');
      pri.id="DressPrice"
      pri.innerHTML="₹"+" "+element.price;

      div2.append(name,pri);

      div1.append(img,);

      div.append(div1,div2)
      container.append(div);
      div.addEventListener('click',()=>{
        addTolocal(element);
      })
  });
}
let arr=[];
const addTolocal = (el)=>{
 arr.push(el);
 localStorage.setItem('DetailsData',JSON.stringify(arr));
 window.location.href="DetailsPage.html"
}

export {one};