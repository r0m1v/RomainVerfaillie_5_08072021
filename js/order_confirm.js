// Affiche la commande enregistrée dans le local storage
const displayContact = (contact) => {
  return `<div>
  <p>Nom : ${contact.lastName}</p>
  <p>Prénom :${contact.firstName}</p>
  <p>Email : </p>
  </div>`;
};

const displayOrder = () => {
  const orderDiv = document.getElementById("order");
  const order = JSON.parse(localStorage.getItem("order"));
  orderDiv.innerHTML = `
  <div>${displayContact(order.contact)}</div>
  <div>
  ${order.products.map(createTeddyItemHtml)}
  </div>`;
};
displayOrder();
