import React from "react";
import {
  ServiceCon,
  ServiceArea,
  TitleServe,
  NextBtns,
} from "./styled/Service.styled";
import { Container } from "./styled/Container.styled";

const Consultarea = () => {
  return (
    <ServiceCon>
      <Container>
        <ServiceArea>
            <TitleServe></TitleServe>
        </ServiceArea>
      </Container>
    </ServiceCon>
  );
};

export default Consultarea;
