// Affiche la commande enregistrée dans le local storage
const displayContact = (contact) => {
  return `<div>
  <p>Nom : ${contact.lastName}</p>
  <p>Prénom : ${contact.firstName}</p>
  <p>Adresse : ${contact.address}</p>
  <p>Ville : ${contact.city}</p>
  <p>Email : ${contact.email}</p>
  </div>`;
};

const displayProduct = (items) => {
  return items.map((item) =>
  `<div id="ticket_product">
  <div><p>Article : ${item.name}</p>
  <p>Id : ${item.id}</p></div>
  <p>Prix : ${item.color}</p>
  <p>Prix : ${item.price},00 €</p>
  <p>Quantité : ${item.quantity}</p>
  </div>`
  ).join("");
};

const displayOrder = () => {
  const orderDiv = document.getElementById("order");
  const order = JSON.parse(localStorage.getItem("order"));
  const baskettest = JSON.parse(localStorage.getItem("basket"));
  orderDiv.innerHTML = `
  <div id="ticket">
  <p>Votre commande a bien été effectuée</p>
  <div>${displayContact(order.contact)}</div>
  <div>${displayProduct(baskettest.items)}</div>
  <p>Merci pour votre achat</p>
  </div>`;
};
displayOrder();
