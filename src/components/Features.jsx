import React from "react";
import {
  Featuresarea,
  Title,
  Featurecontainer,
  Featurecards,
  Imgcontainer,
  Greencard,
  Buttons
} from "./styled/Features.styled";
import { Container } from "./styled/Container.styled";
import { FeatureData } from "../Data/Feature";

const Features = () => {
  return (
    <Featuresarea>
      <Container>
        <Title>Featured Products</Title>
        <Featurecontainer>
          {FeatureData.map((feature, index) => (
            <Featurecards key={index}>
              <Imgcontainer>
                <img src={feature.img} alt="/" />
              </Imgcontainer>
              {feature.greenCard.map((item, index) => (
                <Greencard key={index}>
                  <h3>{item.title}</h3>
                  <p>{item.price}</p>
                  <Buttons></Buttons>
                </Greencard>
              ))}
            </Featurecards>
          ))}
        </Featurecontainer>
      </Container>
    </Featuresarea>
  );
};

export default Features;
