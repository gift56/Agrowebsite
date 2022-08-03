import React from "react";
import { Container } from "./styled/Container.styled";
import LogoImg from "../agroImg/logo.svg";
import { Headers, Headerone } from "./styled/Headers.styled";

const Header = () => {
  return (
    <Headers>
      <Container>
        <Headerone>
          <img src={LogoImg} alt="logo" />
          <form>
            <input type="text"/>
            <button className="btn">Search</button>
          </form>
        </Headerone>
      </Container>
    </Headers>
  );
};

export default Header;
