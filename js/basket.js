//Créer un panier si aucun panier existe
function initializeBasket() {
  const basketFromLocalSTorage = localStorage.getItem("basket");
  if (!basketFromLocalSTorage) {
    const basket = {
      items: [],
    };
    localStorage.setItem("basket", JSON.stringify(basket));
  }
}
//Ajout un élément au panier
function addItem(item) {
  const basket = JSON.parse(localStorage.getItem("basket"));
  basket.items.push(item);
  localStorage.setItem("basket", JSON.stringify(basket));
}
// calcul et retourne le montant total du panier
function getGrandTotal() {
  const basket = JSON.parse(localStorage.getItem("basket"));
  let total = 0;
  basket.items.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
}
//Clean le local storage
const cleanBasket = () => {
  localStorage.removeItem("basket");
};
initializeBasket();
