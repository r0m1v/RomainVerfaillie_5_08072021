// Récupere l'id contenu dans le lien
const getArticleId = () => {
  return new URL(location.href).searchParams.get("id");
}

const addToCart = (id, color) => {
  //local storage, trouver une solution pour pouvoir ajouter des éléments (couleurs ou teddy differents) + quantité
}

const teddyDisplay = async () => {
  const articleId = getArticleId();
  const teddyData = await fetchTeddy(articleId);
  let selectedColor = teddyData.colors[0];
  document.getElementById("teddy_container").innerHTML =
    createTeddyHTML(teddyData);
 document.querySelector("select").addEventListener("change", (e) => {
  selectedColor = e.target.value});
  document.querySelector("button").addEventListener("click", () => {
    addToCart(articleId, selectedColor);
});
}
teddyDisplay();
