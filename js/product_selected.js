// Récupere l'id contenu dans le lien
const getArticleId = () => {
  return new URL(location.href).searchParams.get("id");
};

const teddyDisplay = async () => {
  const articleId = getArticleId();
  const teddyData = await fetchTeddy(articleId);
  const basketObject = {
    id: teddyData._id,
    name: teddyData.name,
    price: teddyData.price / 100,
    color: teddyData.colors[0],
  };
  document.getElementById("teddy_container").innerHTML =
    createTeddyHTML(teddyData);
  document.querySelector("select").addEventListener("change", (e) => {
    basketObject.color = e.target.value;
  });
  document.querySelector("button").addEventListener("click", () => {
    const item = JSON.stringify(basketObject);
    localStorage.setItem("basket", item);
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
    if (basketObject.quantity < 1) {
      quantity.innerHTML = 1;
      basketObject.quantity = 1;
    }
  });
};
teddyDisplay();
