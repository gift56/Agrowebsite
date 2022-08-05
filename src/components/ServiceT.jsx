import React from "react";
import { Container } from "./styled/Container.styled";
import { ServiceArea, ServiceCon, TitleServe } from "./styled/Service.styled";

const ServiceT = () => {
  return (
    <ServiceCon>
      <Container>
        <ServiceArea>
          <TitleServe>
            <h2>Our Service</h2>
          </TitleServe>
          
        </ServiceArea>
      </Container>
    </ServiceCon>
  );
};

export default ServiceT;
