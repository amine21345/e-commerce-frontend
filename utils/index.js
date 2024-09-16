export async function fetchProducts(filters) {
  // Construct the query string from the filters object
  const queryString = new URLSearchParams(filters).toString();

  // Fetch products with the applied filters
  const response = await fetch(
    `http://localhost:5000/api/products?${queryString}`
  );
  const products = await response.json();

  return products;
}

export async function fetchRatings() {
  const data = await fetch("http://localhost:5000/api/ratings");
  const ratings = await data.json();

  return ratings;
}
