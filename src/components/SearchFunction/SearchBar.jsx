import { useState } from "react";
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("api/products")
      .then((response) => response.json())
      .then((data) => {
        const result = data.products.filter((item) => {
          return value && item.name && item.name.toLowerCase().includes(value);
        });
        setResults(result);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <input
        className="search-input"
        placeholder="Search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
