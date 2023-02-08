import React from "react";
import SearchBar from "./SearchBar";
import { Heading } from "@chakra-ui/react";

const Header = ({ setSearchTerm }) => {
  return (
    <div className="Header">
      <Heading className="Header__title">GymBros</Heading>
      <SearchBar setSearchTerm={setSearchTerm} />
    </div>
  );
};

export default Header;
