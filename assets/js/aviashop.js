class Product {
    constructor(imageUrl, name, price, description, stars) {
      this.imageUrl = imageUrl;
      this.name = name;
      this.price = price;
      this.description = description;
      this.stars = stars;
    }
  
    render() {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
  
      const imageDiv = document.createElement("div");
      imageDiv.classList.add("image");
      const image = document.createElement("img");
      image.src = this.imageUrl;
      image.alt = "";
      imageDiv.appendChild(image);
      productDiv.appendChild(imageDiv);
  
      const namePriceDiv = document.createElement("div");
      namePriceDiv.classList.add("namePrice");
      const name = document.createElement("h3");
      name.textContent = this.name;
      const price = document.createElement("span");
      price.textContent = this.price;
      namePriceDiv.appendChild(name);
      namePriceDiv.appendChild(price);
      productDiv.appendChild(namePriceDiv);
  
      const descriptionParagraph = document.createElement("p");
      descriptionParagraph.textContent = this.description;
      productDiv.appendChild(descriptionParagraph);
  
      const starsDiv = document.createElement("div");
      starsDiv.classList.add("stars");
      for (let i = 0; i < this.stars; i++) {
        const starIcon = document.createElement("i");
        starIcon.classList.add("fa-solid", "fa-star");
        starsDiv.appendChild(starIcon);
      }
      for (let i = this.stars; i < 5; i++) {
        const starIcon = document.createElement("i");
        starIcon.classList.add("fa-regular", "fa-star");
        starsDiv.appendChild(starIcon);
      }
      productDiv.appendChild(starsDiv);
  
      const buyButtonDiv = document.createElement("div");
      buyButtonDiv.classList.add("bay");
      const buyButton = document.createElement("button");
      buyButton.textContent = "Buy now";
      buyButtonDiv.appendChild(buyButton);
      productDiv.appendChild(buyButtonDiv);
  
      return productDiv;
    }
  }
  
  const productsDiv = document.createElement("div");
  productsDiv.classList.add("products");
  const aviaContainerDiv = document.createElement("div");
  aviaContainerDiv.classList.add("Aviacontainer");
  aviaContainerDiv.appendChild(productsDiv);
  
  const products = [
    new Product(
      "./assets/AviaShop/616g6FmM8BL._AC_SL1500_.jpg",
      "Jet Airways (93-Cur) 75",
      "$27.49",
      "37-800 Airplane Miniature Model Plastic Snap-Fit 1:200 Part# ABO-73780H-00",
      4
    ),
    new Product(
      "./assets/AviaShop/41NU9N3ABkL._AC_SL1024_.jpg",
      "Delta Shuttle (97-00)",
      "$128.99",
      "Boeing 727-200 Airplane Miniature Model Plastic Snap Fit 1:200 Part# ABO-72720H-033",
      4
    ),
    new Product(
      "./assets/AviaShop/613Yyjft7hL._AC_SL1500_.jpg",
      "Korean Air (84-Cur)",
      "$22.99",
      "MD-11 Airplane Miniature Model Plastic Snap-Fit 1:200 Part# AMD-01100H-011",
      5
    ),
    new Product(
      "./assets/AviaShop/61B2GIevb3L._AC_SL1500_.jpg",
      "United (76-93)",
      "$189.99",
      "767-200 Airplane Miniature Model Plastic Snap-Fit 1:200 Part# ABO-76720H-002",
      4
    ),
    new Product(
      "./assets/AviaShop/bear1.jpg",
      "Aviation Bear with glasses and scarf",
      "$10.99",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      4
    ),
    new Product(
      "./assets/AviaShop/bear2.jpg",
      "Aviation Bear with glasses and scarf",
      "$7.99",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      4
    ),
    new Product(
      "./assets/AviaShop/bear3.jpg",
      "Cute Aviation Bear with glasses",
      "$8.99",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      4
    ),
    new Product(
      "./assets/AviaShop/bear4.jpeg",
      "Aviation Bear with glasses and scarf",
      "$7.99",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      4
    ),
  ];
  
  for (let product of products) {
    productsDiv.appendChild(product.render());
  }
  
  document.body.appendChild(aviaContainerDiv);