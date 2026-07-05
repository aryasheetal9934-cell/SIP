const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 }
];

// Apply 10% discount and return updated prices
const updatedPrices = products.map(product => product.price * 0.9);

console.log(updatedPrices);