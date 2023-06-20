import { getDiy } from "../api";
import { Link, useParams, useLocation, useLoaderData } from "react-router-dom";

export function loader({ params }) {
  return getDiy(params.id);
}

export default function ProductDetials() {
  const product = useLoaderData();
  const location = useLocation();

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="product-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} products</span>
      </Link>

      <div className="product-detail">
        <img className="img-size" src={`../images/${product.imageUrl}`} />

        <div className="product-description">
          <h2>{product.name}</h2>
          <p className="product-price">
            <span>{product.itemPrice}</span>
          </p>
          <p>{product.description}</p>
          <button className="link-button">Add To Cart</button>
          <i className={`product-type ${product.type} selected upperCase`}>
            {product.type}
          </i>
        </div>
      </div>
    </div>
  );
}
