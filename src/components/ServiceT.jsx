import React from "react";
import { Container } from "./styled/Container.styled";
import { ServiceArea, ServiceCon, TitleServe } from "./styled/Service.styled";
import Line from "../agroImg/line.png";

const ServiceT = () => {
  return (
    <ServiceCon>
      <Container>
        <ServiceArea>
          <TitleServe>
            <img src={Line} alt="/" />
            <h2>Our Service</h2>
            <img src={Line} alt="/" />
          </TitleServe>
        </ServiceArea>
      </Container>
    </ServiceCon>
  );
};

export default ServiceT;
