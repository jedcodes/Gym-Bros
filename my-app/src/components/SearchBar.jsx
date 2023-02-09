import React from "react";

const SearchBar = ({ setSearchTerm }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <form className="Searchbar">
      <input
        className="Searchbar__input"
        type="text"
        onChange={handleChange}
        placeholder="Search..."
      />
    </form>
  );
};

export default SearchBar;
