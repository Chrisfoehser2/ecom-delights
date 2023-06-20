import "./PromoBar.css";
import Carousel from "react-bootstrap/Carousel";

export default function Promo() {
  return (
    <div className="carousel-container">
      <Carousel controls={false} indicators={false} fade={true} interval={3000}>
        <Carousel.Item>
          <p className="promo-bar-item">
            {" "}
            REFER A FRIEND AND YOU'LL BOTH GET 15% OFF YOUR NEXT VISIT
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <p className="promo-bar-item">FREE DELIVERY ON ORDERS OVER $75</p>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
