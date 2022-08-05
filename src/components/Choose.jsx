import React from "react";
import {
  ChooseArea,
  ChooseCon,
  ChooseTitle,
  ChooseCardContainer,
  ChooseCard,
} from "./styled/Choose.styled";
import { Container } from "./styled/Container.styled";
import Star from "../agroImg/star.png";
import { ChooseData } from "../Data/ChooseData";

const Choose = () => {
  return (
    <ChooseCon>
      <Container>
        <ChooseArea>
          <ChooseTitle>
            <h2>Why Choose Us</h2>
            <div className="star">
              <img src={Star} alt="" />
            </div>
            <p>
              AgroMech is a First Class Provider of Agricultural Machineries and
              Equipments
            </p>
          </ChooseTitle>
          <ChooseCardContainer>
            {ChooseData.map((card, index) => (
              <ChooseCard key={index}>
                <img src={card.img} alt="/" />
                <h3>{card.title}</h3>
                <p>{card.details}</p>
              </ChooseCard>
            ))}
          </ChooseCardContainer>
        </ChooseArea>
      </Container>
    </ChooseCon>
  );
};

export default Choose;
