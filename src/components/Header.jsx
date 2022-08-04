import React from "react";
import { Container } from "./styled/Container.styled";
import LogoImg from "../agroImg/logo.svg";
import User from "../agroImg/user.png";
import Heart from "../agroImg/heart.png";
import Cart from "../agroImg/cart.png";
import {
  Headers,
  Headerone,
  Nav,
  HeaderTwo,
  NavTwo,
} from "./styled/Headers.styled";

const Header = () => {
  return (
    <Headers>
      <Container>
        <Headerone>
          <img src={LogoImg} alt="logo" className="logo" />
          <form>
            <input type="text" />
            <button className="btn">Search</button>
          </form>
          <Nav>
            <div>
              <img src={User} alt="" />
              <span>Account</span>
            </div>
            <div>
              <img src={Heart} alt="" />
              <span>Wishlist</span>
            </div>
            <div>
              <img src={Cart} alt="" />
              <span>Cart</span>
            </div>
          </Nav>
          <div className="toggle"></div>
        </Headerone>
      </Container>
      <HeaderTwo>
        <Container>
          <NavTwo>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Stock</li>
            <li>Hire</li>
            <li>Gallery</li>
            <li>Consultation</li>
            <li>Parts & Maintenance </li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </NavTwo>
        </Container>
      </HeaderTwo>
    </Headers>
  );
};

export default Header;
