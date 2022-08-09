//sélectionner le conteneur dans lequel mettre les produits 
const productsContainer = document.querySelector("#items");

// récuperation des produits de l'api en utilisant la methode fetch 
async function getProducts() {
  try {
    const response = await fetch("http://localhost:3000/api/products");
    const data = await response.json();
    displayProducts(data);
  } catch (e) {
    console.log(e);
  }
}

getProducts();

//create and display items in index html
function displayProducts(data) {
  //loop through data's array
  for (const i of data) {
    //create elements pour each array index
    const link = document.createElement("a");
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    //assign elements
    link.href = `./product.html?id=${i._id}`;
    img.src = i.imageUrl;
    img.alt = i.altTxt;
    h3.textContent = i.name;
    p.textContent = i.description;

    //appended child layout
    link.appendChild(article);
    article.appendChild(img);
    article.appendChild(h3);
    article.appendChild(p);
    // on insert l'article produit dans la section 
    // product container 
    productsContainer.appendChild(link);
  }
}