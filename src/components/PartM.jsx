import React from "react";
import { Container } from "./styled/Container.styled";
import {
  PartArea,
  PartContainer,
  PleftSide,
  PrightSide,
} from "./styled/PartM.styled";
import TruckImg from "../agroImg/cran.png";

import Pin from "../agroImg/pin.png";

const PartM = () => {
  return (
    <PartContainer>
      <Container>
        <PartArea>
          <PleftSide>
            <div>
                <h2>Great Valued Customer’s Relationship</h2>
                <p>
                  When a customer purchases a product from us, that is the start of
                  the relationship, not the end of it. We pride ourselves on
                  delivering the best services possible, and on all our staff
                  knowing exactly how these machines and equipments work, so
                  whenever a customer has a question about any of these machines and
                  equipments, they know they are speaking to someone to someone who
                  can answer it. Our team of service engineers are trained to the
                  highest technical level and we work closely with customers to
                  ensure that planned maintenance is undertaken in the most
                  convenient and effective way. In an unlikely of an unexpected
                  repair or breakdown, we will endeavour to have the machines back
                  up and running in the quickest time possible. Our team’s
                  dedication and support has won them numerous national customer
                  care awards.
                </p>
                <button className="btn">GET SUPPORT NOW</button>
                <img src={Pin} alt="/" />
            </div>
          </PleftSide>
          <PrightSide>
            <img src={TruckImg} alt="/" />
          </PrightSide>
        </PartArea>
      </Container>
    </PartContainer>
  );
};

export default PartM;
