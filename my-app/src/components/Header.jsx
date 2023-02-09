import React from "react";
import SearchBar from "./SearchBar";

const Header = ({ setSearchTerm }) => {
  return (
    <div className="Header">
      <h1 className="Header__title">GymBros</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
    </div>
  );
};

export default Header;
