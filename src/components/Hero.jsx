import React from "react";
import { Herosec } from "./styled/Hero";
import Homebg from "../agroImg/homeImg.png";
import { Container } from "./styled/Container.styled";

const Hero = () => {
  return (
    <Herosec bg={Homebg}>
      <Container></Container>
    </Herosec>
  );
};

export default Hero;
