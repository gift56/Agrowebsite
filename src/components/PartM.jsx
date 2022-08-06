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
                <span>
                  When a customer purchases a product from us, that is the start
                  of the
                </span>
                <span>
                  relationship, not the end of it. We pride ourselves on
                  delivering the best services
                </span>
                <span>
                  possible, and on all our staff knowing exactly how these
                  machines and
                </span>
                <span>
                  equipments work, so whenever a customer has a question about
                  any of these
                </span>
                <span>
                  machines and equipments, they know they are speaking to
                  someone
                </span>
                <span>to someone who can answer it. </span>
                <span>
                  Our team of service engineers are trained to the highest
                  technical level and we
                </span>
                <span>
                  work closely with customers to ensure that planned maintenance
                  is undertaken in
                </span>
                <span>
                  the most convenient and effective way. In an unlikely of an
                  unexpected repair or
                </span>
                <span>
                  breakdown, we will endeavour to have the machines back up and
                  running in the
                </span>
                <span> quickest time possible. </span>
                <span>
                  Our team’s dedication and support has won them numerous
                  national customer
                </span>
                <span>care awards.</span>
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
