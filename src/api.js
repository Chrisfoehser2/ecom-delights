export async function getProducts(id) {
  const url = id ? `/api/products/${id}` : "/api/products";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch products",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.products;
}

export async function getCoffee(id) {
  const coffee = id ? `/api/coffee/${id}` : "/api/coffee";

  const url = coffee;
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch products",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.products;
}

export async function getFood(id) {
  const food = id ? `/api/fresh-bakes/${id}` : "/api/fresh-bakes";

  const url = food;
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch products",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.products;
}

export async function getDiy(id) {
  const diy = id ? `/api/diy/${id}` : "/api/diy";
  const url = diy;
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch products",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.products;
}
