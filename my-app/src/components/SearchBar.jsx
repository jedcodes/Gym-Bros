import React from "react";
import { Input } from "@chakra-ui/react";

const SearchBar = ({ setSearchTerm }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <form className="Searchbar">
      <Input
        size="md"
        className="Searchbar__input"
        type="text"
        onChange={handleChange}
        placeholder="Search..."
      />
    </form>
  );
};

export default SearchBar;
