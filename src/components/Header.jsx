import React from "react";
import { Container } from "./styled/Container.styled";
import LogoImg from "../agroImg/logo.svg";
import User from "../agroImg/user.png";
import Heart from "../agroImg/heart.png";
import Cart from "../agroImg/cart.png";
import { Headers, Headerone, Nav } from "./styled/Headers.styled";

const Header = () => {
  return (
    <Headers>
      <Container>
        <Headerone>
          <img src={LogoImg} alt="logo" className="logo"/>
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
        </Headerone>
      </Container>
    </Headers>
  );
};

export default Header;
