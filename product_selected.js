// Récupere l'id contenu dans le lien
const getArticleId = () => {
  return new URL(location.href).searchParams.get("id");
}

const teddyDisplay = async () => {
  const articleId = getArticleId();
  const teddyData = await fetchTeddy(articleId);
  document.getElementById("teddy_container").innerHTML =
    createTeddyHTML(teddyData);
};
teddyDisplay();