const teddiesDisplay = async () => {
  const teddyData = await fetchTeddies();
  document.getElementById("bloc_products").innerHTML = teddyData
    .map(createTeddyItemHtml)
    .join("");
};
teddiesDisplay();


