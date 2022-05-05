import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";

const options = {
  badgeContent: "4",
  burgerColor: "black",
  burgerColorHover: "#0015ff",
  logo,
  logoWidth: "20vmax",
  logoColor: "#0015ff",
  navColor1: "#9393c7",
  logoHoverSize: "10px",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "white",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "black",
  link1Margin: "1vmax",
  searchIconUrl: "/search",
  profileIconUrl: "/login",
  profileIconColor: "white",
  searchIconColor: "white",
  cartIconColor: "white",
  profileIconColorHover: "black",
  searchIconColorHover: "black",
  cartIconColorHover: "black",
  cartIconMargin: "1vmax",
  profileIconMargin: "1vmax",
  searchIconMargin: "1vmax",
};

const Header = ({ icon }) => {
  return (
    <ReactNavbar
      {...options}
      searchIcon={true}
      SearchIconElement={BsSearch}
      cartIcon={true}
      CartIconElement={ShoppingCartOutlined}
      profileIcon={true}
      ProfileIconElement={CgProfile}
    />
  );
};

export default Header;
