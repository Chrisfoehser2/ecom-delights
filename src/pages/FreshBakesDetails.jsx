import { getFood } from "../api";
import { Link, useParams, useLocation, useLoaderData } from "react-router-dom";
import { useShoppingCart } from "../components/context/cartContext";

export function loader({ params }) {
  return getFood(params.id);
}

export default function ProductDetials() {
  const product = useLoaderData();
  const location = useLocation();

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  let quantity = getItemQuantity(
    product.id,
    product.name,
    product.imageUrl,
    product.price
  );

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
          <div className="mt-auto">
            {quantity === 0 ? (
              <>
                <button
                  className="link-button"
                  onClick={() =>
                    increaseCartQuantity(
                      product.id,
                      product.name,
                      product.imageUrl,
                      product.price
                    )
                  }
                >
                  + Add To Cart
                </button>
                <i
                  className={`product-type ${product.type} selected upperCase`}
                >
                  {product.type}
                </i>
              </>
            ) : (
              <div>
                <div className="quantity-btn-layout">
                  <button
                    className="quantity-btn"
                    onClick={() => decreaseCartQuantity(product.id)}
                  >
                    -
                  </button>
                  <div>
                    <span>{quantity}</span> in cart
                  </div>
                  <button
                    className="quantity-btn"
                    onClick={() => increaseCartQuantity(product.id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
