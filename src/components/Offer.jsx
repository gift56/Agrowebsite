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
            <div className="description">
              <h3>
                <span>First Class Provider of </span>
                <span>Agricultural Machineries</span>
              </h3>
            </div>
          </Leftside>
          <Rightside>
            <p>
              AgroMech Company is an online based supplier of machines and
              equipments for agricultural and farming industry, We are dedicated
              to providing a first class service to all of our customers.
            </p>
          </Rightside>
        </Welcometxt>
      </Container>
    </Offerarea>
  );
};

export default Offer;
