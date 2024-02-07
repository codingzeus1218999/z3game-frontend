
export async function loadFeaturedProducts() {
  const res = await fetch('https://restapi.zero3games.com.br/products/featured');
  const data = await res.json()

  return data
}


export async function retrieveProductsByFrientlyURL(frientlyURL) {
  const res = await fetch('https://restapi.zero3games.com.br/products/' + frientlyURL);
  const data = await res.json()

  return data
}