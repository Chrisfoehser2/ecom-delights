import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getDiy } from "../api.js";

export async function loader() {
  return getDiy();
}
export default function Diy() {
  const product = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  const displayedProducts = typeFilter
    ? product.filter((item) => item.type === typeFilter)
    : product;

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

  return (
    <div className="product-list-container">
      <h1>Explore your DIY options</h1>

      <div className="product-list">{productElements}</div>
    </div>
  );
}
