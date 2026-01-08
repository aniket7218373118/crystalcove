fetch("products.json")
.then(r => r.json())
.then(products => {
  const grid = document.getElementById("productGrid");

  products.forEach(p => {
    grid.innerHTML += `
      <div class="product-card">
        <img src="${p.image}">
        <h3>${p.title}</h3>
        <p>₹${p.price}</p>
        <a href="order.html?product=${encodeURIComponent(p.title)}&price=${p.price}">
          <button>Buy Now</button>
        </a>
      </div>
    `;
  });
});
