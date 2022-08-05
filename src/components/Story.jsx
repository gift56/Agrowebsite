import React from "react";
import { Container } from "./styled/Container.styled";
import { Cardside, Storyarea, StoryCon, Textside } from "./styled/story.styled";
import { Card } from "./styled/Offer.styled";
import cardImg from "../agroImg/mechI.png";

const Story = () => {
  return (
    <StoryCon>
      <Container>
        <Storyarea>
          <Textside>
            <h2>Our Story</h2>
            <h4>Who Are We?</h4>
            <p>
              <span>
                AgroMech Company is an online based supplier of machines and
              </span>
              <span>
                equipments for agricultural and farming industry, We are
                dedicated to
              </span>
              <span>
                providing a first class service to all of our customers, both
                home and
              </span>{" "}
              <span>
                abroad, using experienced hauliers to ensure the highest quality
                service
              </span>{" "}
              <span>
                AgroMech is registered with the Corporate Affairs Commission of
                the
              </span>
              <span>
                Federal Republic of Nigeria, established under the Companies and
                Allied
              </span>{" "}
              <span>matters Act 1990</span>
              <span>
                AgroMech ensures the clearing of machine, certificate and paper
                works are
              </span>
              <span>completed to the highest standard.</span>
            </p>
          </Textside>
          <Cardside>
            <Card>
              <img src={cardImg} alt="/" />
              <h2>Machinery Provider</h2>
              <p>
                We provide a platform where you can hire various machines and
                equipments for both long and short term
              </p>
            </Card>
          </Cardside>
        </Storyarea>
      </Container>
    </StoryCon>
  );
};

export default Story;
