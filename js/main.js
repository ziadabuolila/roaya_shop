const moreBtn = document.getElementById("moreBtn");
const menu = document.getElementById("menu_mid_bar");
const arrow = document.querySelector(".arrow");
moreBtn.addEventListener("click", () => {
  const isOpen = menu.style.maxHeight && menu.style.maxHeight !== "0px";
  if (isOpen) {
    menu.style.maxHeight = "0px";
    arrow.style.transform = "rotate(0deg)";
  } else {
    menu.style.maxHeight = menu.scrollHeight + "px";
    arrow.style.transform = "rotate(180deg)";
  }
});
// ------ favourite ------
document.addEventListener("DOMContentLoaded", function () {
  const favButtons = document.querySelectorAll(".card-icon");
  favButtons.forEach(button => {
    button.addEventListener("click", function () {
      const card = button.closest(".card-box");
      const image = card.querySelector(".card-image").src;
      const title = card.querySelector(".card-title").innerText;
      const price = card.querySelector(".card-price").innerText;
      const product = {
        image: image,
        title: title,
        price: price
      };
      const stored = localStorage.getItem("favouriteProducts");
      let products = stored ? JSON.parse(stored) : [];
      if (!products.find(p => p.title === product.title)) {
        products.push(product);
        localStorage.setItem("favouriteProducts", JSON.stringify(products));
      }
    });
  });
});
// ------ shopping ------
document.addEventListener("DOMContentLoaded", function () {
  const cartButtons = document.querySelectorAll(".card-cart-btn, .add-to-cart-button");
  cartButtons.forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      let card = btn.closest(".card-box") || btn.closest(".product-card");
      if (!card) return;
      let image = card.querySelector("img")?.src || "";
      let title = card.querySelector(".card-title, .product-title-link")?.innerText || "";
      let priceContainer = card.querySelector(".card-price, .product-price");
      let price = priceContainer ? priceContainer.innerText.trim() : "";
      const product = { image, title, price };
      let stored = localStorage.getItem("shoppingCart");
      let cartItems = stored ? JSON.parse(stored) : [];
      if (!cartItems.find(p => p.title === product.title)) {
        cartItems.push(product);
        localStorage.setItem("shoppingCart", JSON.stringify(cartItems));
      }
    });
  });
});