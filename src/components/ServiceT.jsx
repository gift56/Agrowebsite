import React from "react";
import { ServiceData } from "../Data/ServiceData";
import { Container } from "./styled/Container.styled";
import { ServiceArea, ServiceCon, TitleServe } from "./styled/Service.styled";
import { ChooseCardContainer, ChooseCard } from "./styled/Choose.styled";
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
          <ChooseCardContainer>
            {ServiceData.map((card, index) => (
              <ChooseCard key={index}>
                <img src={card.img} alt="/" />
                <h3>{card.title}</h3>
                <p>{card.details}</p>
              </ChooseCard>
            ))}
          </ChooseCardContainer>
        </ServiceArea>
      </Container>
    </ServiceCon>
  );
};

export default ServiceT;
