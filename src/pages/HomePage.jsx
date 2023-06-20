import { Link } from "react-router-dom";
import { useNavModal } from "../components/context/NavModalContext";

import { Trans } from "@lingui/macro";

export default function HomePage() {
  return (
    <div className="home-container">
      <>
        <img
          className="home-img"
          src="https://images.unsplash.com/photo-1464195157370-5b596406ff80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
        />
        <div className="cover-text">
          <h6>Your Friendly Neighborhood</h6>
          <h1>Yummy Delights</h1>
        </div>
        <Link to="products">
          <div className="shop-now-btn">Shop Now</div>
        </Link>
      </>
      <div className="about-us">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          nesciunt nam ipsa, voluptatem animi dolorem! Quia minus mollitia
          dolore? Pariatur facilis necessitatibus, minus sunt iusto quas non
          perspiciatis. Laudantium, iusto!
        </p>
      </div>
      <div className="home-bullets">
        <div>
          <img
            className="bullet-img"
            src="https://images.unsplash.com/photo-1605677594331-28630ceb842d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
          />
          <p className="bullet-text">Fresh Coffee</p>
        </div>
        <div>
          <img
            className="bullet-img"
            src="https://images.unsplash.com/photo-1606282142799-5df89dbc835e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
          />
          <p className="bullet-text-2">Baked Goods</p>
        </div>
        <div>
          <img
            className="bullet-img"
            src="https://plus.unsplash.com/premium_photo-1661311831497-a434dbfbd219?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
          <p className="bullet-text-3">DIY Supplies</p>
        </div>
      </div>
    </div>
  );
}
