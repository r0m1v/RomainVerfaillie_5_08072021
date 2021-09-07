// Récupere l'id contenu dans le lien
const getArticleId = () => {
  return new URL(location.href).searchParams.get("id");
};

const teddyDisplay = async () => {
  const articleId = getArticleId();
  const teddyData = await fetchTeddy(articleId);
  const basketItem = {
    id: teddyData._id,
    name: teddyData.name,
    price: teddyData.price / 100,
    color: teddyData.colors[0],
  };

  document.getElementById("teddy_container").innerHTML =
    createTeddyHTML(teddyData);
    // Modifie la couleur de l'objet selectionné
  document.querySelector("select").addEventListener("change", (e) => {
    basketItem.color = e.target.value;
  });
  //Ajouter un item au panier
  document.querySelector("button").addEventListener("click", () => {
    addItem(basketItem);
    window.location.href = "basket.html";
  });
  //Compteur
  let btnMore = document.getElementById("btn-more");
  let btnLess = document.getElementById("btn-less");
  let quantity = document.getElementById("quantity");
  basketItem.quantity = parseInt(quantity.innerText);

  btnMore.addEventListener("click", () => {
    basketItem.quantity++;
    quantity.innerHTML = basketItem.quantity;
  });

  btnLess.addEventListener("click", () => {
    basketItem.quantity--;
    quantity.innerHTML = basketItem.quantity;
    if (basketItem.quantity < 1) {
      quantity.innerHTML = 1;
      basketItem.quantity = 1;
    }
  });
};
teddyDisplay();
