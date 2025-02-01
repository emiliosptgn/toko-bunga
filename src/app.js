document.addEventListener("alpine:init", () => {
  alpine.data("products", () => ({
    items: [
      { id: 1, name: "valentine", img: "1.jpg", price: 820.0 },
      { id: 1, name: "bunga indah", img: "2.jpg", price: 123.0 },
      { id: 1, name: "bunga", img: "3.jpg", price: 756.0 },
      { id: 1, name: "bunga hal", img: "4.jpg", price: 820.0 },
      { id: 1, name: "passo", img: "5.jpg", price: 625.0 },
    ],
  }));
});
