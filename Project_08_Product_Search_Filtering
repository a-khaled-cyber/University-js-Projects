const products = [
  { name: "Laptop", price: 2500 },
  { name: "Mouse", price: 45 },
  { name: "Keyboard", price: 90 },
  { name: "Laptop Stand", price: 75 },
  { name: "Monitor", price: 600 }
];

function showProducts() {
  const query = document.getElementById("search").value.toLowerCase().trim();
  const maxPriceValue = document.getElementById("maxPrice").value;
  const maxPrice = maxPriceValue === "" ? Infinity : Number(maxPriceValue);

  const results = document.getElementById("results");
  results.innerHTML = "";

  if (maxPriceValue !== "" && (!Number.isFinite(maxPrice) || maxPrice < 0)) {
    results.textContent = "Enter a valid maximum price.";
    return;
  }

  const matches = products.filter(function (product) {
    const matchesName = product.name.toLowerCase().includes(query);
    const matchesPrice = product.price <= maxPrice;
    return matchesName && matchesPrice;
  });

  matches.forEach(function (product) {
    const li = document.createElement("li");
    li.textContent = product.name + " - AED " + product.price;
    results.appendChild(li);
  });

  if (matches.length === 0) {
    results.textContent = "No matching products.";
  }
}

document.getElementById("search").addEventListener("input", showProducts);
document.getElementById("maxPrice").addEventListener("input", showProducts);
showProducts();
