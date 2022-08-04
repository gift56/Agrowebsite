import React from "react";
import {
  Offerarea,
  Welcometxt,
  Leftside,
  Rightside,
} from "./styled/Offer.styled";
import { Container } from "./styled/Container.styled";

const Offer = () => {
  return (
    <Offerarea>
      <Container>
        <Welcometxt>
          <Leftside>
            <h3>What we offer</h3>
          </Leftside>
          <Rightside></Rightside>
        </Welcometxt>
      </Container>
    </Offerarea>
  );
};

export default Offer;
