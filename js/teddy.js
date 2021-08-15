/*
  récupération des teddies depuis le serveur
  transformation en un tableau de données teddies
*/
const fetchTeddies = async () => {
    const res = await fetch("http://localhost:3000/api/teddies")
  
    return await res.json()
  };
  
  /*
    récupération un teddy à partir de son identifiant (_id)
  */
  const fetchTeddy = async (id) => {
    const res = await fetch(`http://localhost:3000/api/teddies/${id}`)
  
    return await res.json()
  };
  
  /*
    créé un element HTML pour un teddy
  */
  const createTeddyHTML = teddy => `
    <div class="formatting_products">
      <a href="product_selected.html?id=${teddy._id}">
        <img class="img_product" src=${teddy.imageUrl} alt="${teddy.name}">
        <div class="nameandprice">
          <h3>${teddy.name}</h3>
          <p>${teddy.price / 100},00 €</p>
        </div>
        <p>${teddy.description}</p>
      </a>
    </div>
  `;