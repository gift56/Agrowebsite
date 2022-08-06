import React from "react";
import {
  ServiceCon,
  ServiceArea,
  TitleText,
  NextBtns,
} from "./styled/Service.styled";
import { Container } from "./styled/Container.styled";

const Consultarea = () => {
  return (
    <ServiceCon>
      <Container>
        <ServiceArea>
          <TitleText>
            <h2>For Consultation</h2>
            <p>
              We are always looking forward to give the best products and
              services, Our round the clock customer service agents ensures
              smooth shopping experience
            </p>
          </TitleText>
        </ServiceArea>
      </Container>
    </ServiceCon>
  );
};

export default Consultarea;
