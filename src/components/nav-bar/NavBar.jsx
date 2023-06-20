import TopBar from "./IntroTopBar";
import Promo from "./promo/PromoBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "./ProfileModal";
import Cart from "./CartNavIcon";
import { useNavModal } from "../context/NavModalContext";
import { SearchBar } from "../SearchFunction/SearchBar";
import { SearchResultsList } from "../SearchFunction/SearchResultsList";

export default function NavBar() {
  const [results, setResults] = useState([]);
  const { toggle } = useNavModal();

  return (
    <div className="nav-container">
      <TopBar />
      <div className="nav-links">
        <ul className="links">
          <li className="page-name">
            <Link to="/">Yummy-Delights</Link>
          </li>
          <li>
            <Link to="coffee">Coffee</Link>
          </li>
          <li>
            <Link to="fresh-bakes">Fresh-Bakes</Link>
          </li>
          <li>
            <Link to="diy">DIY</Link>
          </li>
        </ul>
        <div className="data-field">
          <div className="search-bar-container">
            <SearchBar setResults={setResults} />
            {results && results.length > 0 && (
              <SearchResultsList results={results} />
            )}
          </div>

          <div>
            <Cart />
          </div>
          <div>
            <i onClick={toggle} className="bi bi-person-circle"></i>
          </div>
          <div>
            <i className="bi bi-translate"></i>
          </div>
        </div>
      </div>

      <Promo />
      <div>
        <Modal />
      </div>
    </div>
  );
}
