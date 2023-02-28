
export async function loadFeaturedProducts() {
  const res = await fetch('http://localhost:8080/products/featured');
  const data = await res.json()

  return data
}


export async function retrieveProductsByFrientlyURL(frientlyURL) {
  const res = await fetch('http://localhost:8080/products/' + frientlyURL);
  const data = await res.json()

  return data
}