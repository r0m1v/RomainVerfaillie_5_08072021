// Récupere l'id contenu dans le lien
const getArticleId = () => {
  return new URL(location.href).searchParams.get("id");
};
/*
const addToCart = (id, color) => {

  //local storage, trouver une solution pour pouvoir ajouter des éléments (couleurs ou teddy differents) + quantité
}*/



const teddyDisplay = async () => {
  const articleId = getArticleId();
  const teddyData = await fetchTeddy(articleId);
  const basketObject = {
    id: teddyData._id,
    name: teddyData.name,
    price: teddyData.price / 100,
    color: teddyData.colors[0],
    quantity: 0,
  };
  document.getElementById("teddy_container").innerHTML =
    createTeddyHTML(teddyData);
  document.querySelector("select").addEventListener("change", (e) => {
    basketObject.color = e.target.value;
  });
  document.querySelector("button").addEventListener("click", () => {
    /*addToCart(articleId, selectedColor);*/
    /*
    localStorage.card = JSON.stringify(basketObject);
    window.location.href="basket.html";
    */
   //Local storage
    const item = JSON.stringify(basketObject);
    localStorage.setItem("test", item);
    console.log(basketObject);
    window.location.href = "basket.html";
  });
  //Compteur
  let btnMore = document.getElementById("btn-more");
  let btnLess = document.getElementById("btn-less");
  let quantity = document.getElementById("quantity");
  basketObject.quantity = parseInt(quantity.innerText);

  btnMore.addEventListener("click", () => {
    basketObject.quantity++;
    quantity.innerHTML = basketObject.quantity;
  });

  btnLess.addEventListener("click", () => {
    basketObject.quantity--;
    quantity.innerHTML = basketObject.quantity;
    if (basketObject.quantity < 0) {
      quantity.innerHTML = 0;
      basketObject.quantity = 0;
    }
  });
};
teddyDisplay();
