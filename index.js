let teddyData = [];

const fetchTeddy = async () => {
  await fetch("http://localhost:3000/api/teddies")
    .then((res) => res.json())
    .then((data) => (teddyData = data));

  console.log(teddyData);
};

const teddyDisplay = async () => {
  await fetchTeddy();
  document.getElementById("bloc_products").innerHTML = teddyData
    .map(
      (teddy) => `<div class="formatting_products">
      <a href="product_selected.html?id=${teddy._id}">
    <img class="img_product" src=${teddy.imageUrl} alt="${teddy.name}">
    <div class="nameandprice">
    <h3>${teddy.name}</h3>
    <p>${teddy.price / 100},00 €</p>
    </div>
    <p>${teddy.description}</p>
    </div>`
    )
    .join("");
};
teddyDisplay();
