import React from "react";
import { Container } from "./styled/Container.styled";
import { TitleText, ServiceCon } from "./styled/Service.styled";
import { Featuresarea } from "./styled/Features.styled";

const PMfeatures = () => {
  return (
    <ServiceCon>
      <Container>
        <Featuresarea>
          <TitleText>
            <h2>Featured Products</h2>
          </TitleText>
        </Featuresarea>
      </Container>
    </ServiceCon>
  );
};

export default PMfeatures;
