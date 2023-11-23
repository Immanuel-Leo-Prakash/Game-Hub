import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { BsOutlet } from "react-icons/bs";

const NavBar = () => {
  return (
    <>
      <HStack padding="20px">
        <Image src={logo} boxSize="60px"></Image>
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
