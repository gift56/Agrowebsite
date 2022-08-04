import React from "react";
import {
  Featuresarea,
  Title,
  Featurecontainer,
  Featurecards,
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
            <Featurecards key={index}></Featurecards>
          ))}
        </Featurecontainer>
      </Container>
    </Featuresarea>
  );
};

export default Features;
