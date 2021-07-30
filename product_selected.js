(async function () {
  const articleId = getArticleId();
  console.log(articleId);
  const teddy = await getArticle(articleId);

  hydrateArticle(teddy);
})();

// Récupere l'id contenu dans le lien
function getArticleId() {
  return new URL(location.href).searchParams.get("id");
}

// Récupere l'API
function getArticle(articleId) {
  return fetch(`http://localhost:3000/api/teddies/${articleId}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (articles) {
      return articles;
    });
}

// Afficher les informations de l'article
function hydrateArticle(teddy) {
  document.getElementById(
    "container"
  ).innerHTML = `<div class="formatting_products">
    <img class="img_product" src=${teddy.imageUrl} alt="${teddy.name}">
    <div class="nameandprice">
    <h3>${teddy.name}</h3>
    <p>${teddy.price / 100},00 €</p>
    </div>
    <p>${teddy.description}</p>
    <select><option>${teddy.colors[0]}</option></select>
    </div>
    `;
}
