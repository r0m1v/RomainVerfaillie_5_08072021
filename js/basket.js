//Afficher les produits choisit dans un tableau
const boardBasket = () => {
  const teddyData = JSON.parse(localStorage.getItem("basket"));
  document.getElementById("tableau_commande").innerHTML =
    basketProductSelected(teddyData);
};
boardBasket();

const buttonContinueShopping = () => {
  document.getElementById("continue_shopping").addEventListener("click", () => {
    window.location.href = "index.html";
  });
};

//Clean le local storage
const cleanBasket = () =>
  document.getElementById("clean_basket").addEventListener("click", (e) => {
    e.preventDefault;
    localStorage.removeItem("basket");
    alert("le panier a été vidé");
    window.location.href = "basket.html";
  });
cleanBasket();
