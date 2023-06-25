import { useShoppingCart } from "../components/context/cartContext";
import { Link } from "react-router-dom";

export default function Checkout() {
  const {
    cartItems,
    removeFromCart,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useShoppingCart();

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="empty-checkout">
          <h1>Your cart is empty!</h1>
          <Link to="../products">
            <div className="shop-now-btn">Shop Now</div>
          </Link>
        </div>
      ) : (
        <div>
          <h1 className="your-cart">Your Cart </h1>
          {cartItems.map((item) => {
            return (
              <div className="check-out" key={item.id}>
                <img
                  className="checkout-img"
                  src={`../images/${item.imageUrl}`}
                />
                <div className="checkout-product-info">
                  <h3 className="product-name">{item.name}</h3>
                  <div className="product-pricing">
                    <div className="product-details">
                      <p>Quantity: x {item.quantity}</p>
                      <p> Price: ${item.price}</p>
                    </div>
                    <div className="quantity-btn-layout zero-margin">
                      <button
                        className="quantity-btn"
                        onClick={() => decreaseCartQuantity(item.id)}
                      >
                        -
                      </button>
                      <div>
                        <span>{item.quantity}</span> in cart
                      </div>
                      <button
                        className="quantity-btn"
                        onClick={() => increaseCartQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <div className="product-total">
                      <h4>${item.price * item.quantity}</h4>

                      <button onClick={() => removeFromCart(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <h2 className="cart-total">
            Your Total: $
            {cartItems.reduce((total, cartItem) => {
              const item = cartItems.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)}
          </h2>
        </div>
      )}
    </>
  );
}
