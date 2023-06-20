import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getProducts } from "../api.js";
import { useState } from "react";

export async function loader() {
  return getProducts();
}

export default function AllProducts() {
  const products = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);

  const typeFilter = searchParams.get("type");

  const displayedProducts = typeFilter
    ? products.filter((item) => item.type === typeFilter)
    : products;

  const productElements = displayedProducts.map((item) => {
    return (
      <div key={item.id} className="item-tile">
        <Link
          to={item.id}
          state={{
            search: `?${searchParams.toString()}`,
            type: typeFilter,
          }}
        >
          <img className="product-img" src={`./images/${item.imageUrl}`} />
          <div className="product-info">
            <h3>{item.name}</h3>
            <p className="product-price">{item.itemPrice}</p>
          </div>
        </Link>
      </div>
    );
  });

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div className="product-list-container">
      <h1>Explore your delightful options</h1>
      <div className="product-list-filter-buttons">
        <button
          onClick={() => handleFilterChange("type", "coffee")}
          className={`product-type coffee 
                        ${typeFilter === "coffee" ? "selected" : ""}`}
        >
          Coffee
        </button>
        <button
          onClick={() => handleFilterChange("type", "food")}
          className={`product-type food 
                        ${typeFilter === "food" ? "selected" : ""}`}
        >
          Baked Goods
        </button>
        <button
          onClick={() => handleFilterChange("type", "diy")}
          className={`product-type diy 
                        ${typeFilter === "diy" ? "selected" : ""}`}
        >
          DIY Supplies
        </button>

        {typeFilter ? (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="product-type clear-filters"
          >
            Clear filter
          </button>
        ) : null}
      </div>
      <div className="product-list">{productElements}</div>
    </div>
  );
}
