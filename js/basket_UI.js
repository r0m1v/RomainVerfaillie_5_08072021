const buttonContinueShopping = () => {
  document.getElementById("continue_shopping").addEventListener("click", () => {
    window.location.href = "index.html";
  });
};
buttonContinueShopping();

const displayBoardBasketLine = (item) => {
  return `<tr>
  <th>${item.name}</th>
  <th>${item.color}</th>
  <th id="line_quantity">${item.quantity} </th>
  <th>${item.price * item.quantity} €</th>
</tr>`;
};

//Afficher les produits choisit dans un tableau
const boardBasket = () => {
  const basket = JSON.parse(localStorage.getItem("basket"));
  document.getElementById("tableau_commande").innerHTML = `<table>
  <tr>
    <th>Produit(s)</th>
    <th>Couleur</th>
    <th>Quantité</th>
    <th>Prix</th>
  </tr>
  ${basket.items.map((item) => displayBoardBasketLine(item)).join("")}
  <tr><th>Total à payer</th>
  <th>${getGrandTotal()} €</th></tr>
</table>
`;
};
boardBasket();

//Clean le local storage
const cleanBasket = () =>
  document.getElementById("clean_basket").addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("basket");
    alert("le panier a été vidé");
    window.location.href = "basket.html";
  });
cleanBasket();

const send = () => {
  const contact = {
    lastName: document.getElementById("lastName").value,
    firstName: document.getElementById("firstName").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    email: document.getElementById("email").value,
  };
  const basket = JSON.parse(localStorage.getItem("basket"));
  let products = [];
  basket.items.forEach((item) => {
    products = products.concat(new Array(item.quantity).fill(item.id));
  });
  fetch("http://localhost:3000/api/teddies/order", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contact,
      products,
    }),
  })
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (value) {
     localStorage.setItem("order", JSON.stringify(value))
     window.location.href = "order_confirm.html";
      console.log(value);
    });
};

//Passer la commande
async function placeOrder() {
  document.getElementById("order_confirm").addEventListener("click", (e) => {
    e.preventDefault();
    send();
  });
}
placeOrder();
