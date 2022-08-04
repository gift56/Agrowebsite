import React from "react";
import { Container } from "./styled/Container.styled";
import { JoinSection, Imgarea, Joinarea,Title } from "./styled/Join.styled";
import Crank from "../agroImg/joinImg.png";

const Join = () => {
  return (
    <JoinSection>
      <Container>
        <Imgarea>
          <img src={Crank} alt="/" />
        </Imgarea>
        <Joinarea>
            <Title></Title>

        </Joinarea>
      </Container>
    </JoinSection>
  );
};

export default Join;
