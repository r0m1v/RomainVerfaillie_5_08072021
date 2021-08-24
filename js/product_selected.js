

// Récupere l'id contenu dans le lien
const getArticleId = () => {
  return new URL(location.href).searchParams.get("id");
}
/*
const addToCart = (id, color) => {

  //local storage, trouver une solution pour pouvoir ajouter des éléments (couleurs ou teddy differents) + quantité
}*/

let basketObject = {};

const teddyDisplay = async () => {
  const articleId = getArticleId();
  const teddyData = await fetchTeddy(articleId);
  let selectedColor = teddyData.colors[0];
  document.getElementById("teddy_container").innerHTML =
    createTeddyHTML(teddyData);
 document.querySelector("select").addEventListener("change", (e) => {
  selectedColor = e.target.value}); 
  document.querySelector("button").addEventListener("click", () => {
    /*addToCart(articleId, selectedColor);*/
    /*
    localStorage.card = JSON.stringify(basketObject);
    window.location.href="basket.html";
    */
 let card = JSON.stringify(basketObject)
 localStorage.setItem("test", card)
 window.location.href="basket.html";
});
let btnMore = document.getElementById("btn-more");
let btnLess = document.getElementById("btn-less");
let quantity = document.getElementById("quantity");
let compteur = parseInt(quantity.innerText);

btnMore.addEventListener("click", () =>{
  compteur = compteur+1;
  quantity.innerHTML = compteur;
});

btnLess.addEventListener("click", () =>{
  compteur = compteur-1;
  quantity.innerHTML = compteur;
  if (compteur < 0) {
    quantity.innerHTML = 0;
    compteur = 0;
  }
});
basketObject = {
    id : teddyData._id,
    name: teddyData.name,
    color: teddyData.colors,
    price: teddyData.price / 100,
  };
  console.log(basketObject);
}
teddyDisplay();
