/*
  récupération des teddies depuis le serveur
  transformation en un tableau de données teddies
*/
const fetchTeddies = async () => {
  const res = await fetch("http://localhost:3000/api/teddies");
  
  return await res.json();
};

//récupération d'un teddy à partir de son identifiant (_id)
const fetchTeddy = async (id) => {
  const res = await fetch(`http://localhost:3000/api/teddies/${id}`);

  return await res.json();
};

//Créer une option de choix de couleur
const createTeddyColorsOptionsHtml = (teddy) => {
  return teddy.colors.map((color) => {
    return `<option value="${color}">${color}</option>`;
  }); //map permet de transformer
};

//créé un element HTML pour un teddy
const createTeddyHTML = (teddy) => {
  return `
    <div class="formatting_products">
      <a href="product_selected.html?id=${teddy._id}">
        <img class="img_product" src=${teddy.imageUrl} alt="${teddy.name}">
        <div class="nameandprice">
          <h3 class="title">${teddy.name}</h3>
          <p class="price">${teddy.price / 100},00 €</p>
        </div>
        <p>${teddy.description}</p>
      </a>
      <div id="select_button">
      <select>${createTeddyColorsOptionsHtml(teddy)}</select>
      <button><span id="text_button">Ajouter au panier</span></button>
      <button id="btn-less">-</button><span id="quantity">1</span><button id="btn-more">+</button>
      </div>
    </div>
  `;
};

const createTeddyItemHtml = (teddy) => {
  return `
       <div class="formatting_products">
         <a href="product_selected.html?id=${teddy._id}">
           <img class="img_product" src=${teddy.imageUrl} alt="${teddy.name}">
           <div class="nameandprice">
             <h3 class="title">${teddy.name}</h3>
             <p class="price">${teddy.price / 100},00 €</p>
           </div>
           <p>${teddy.description}</p>
         </a>  
       </div>
     `;
};
