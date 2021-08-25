const boardBasket = () => {
  const teddyData = JSON.parse(localStorage.getItem("basket"));
  document.getElementById("tableau_commande").innerHTML =
    basketProductSelected(teddyData);
};

boardBasket();

const cleanBasket = () =>
  document.getElementById("clean_basket").addEventListener("click", (e) => {
    e.preventDefault;
    localStorage.removeItem("basket");
    alert("le panier a été vidé");
  });
cleanBasket();
