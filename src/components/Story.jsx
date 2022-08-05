import React from "react";
import { Container } from "./styled/Container.styled";
import { Cardside, Storyarea, StoryCon, Textside } from "./styled/story.styled";

const Story = () => {
  return (
    <StoryCon>
      <Container>
        <Storyarea>
          <Textside>
            <h2>Our Story</h2>
            <h4>Who Are We?</h4>
            <p>
              AgroMech Company is an online based supplier of machines and
              equipments for agricultural and farming industry, We are dedicated
              to providing a first class service to all of our customers, both
              home and abroad, using experienced hauliers to ensure the highest
              quality service AgroMech is registered with the Corporate Affairs
              Commission of the Federal Republic of Nigeria, established under
              the Companies and Allied matters Act 1990 AgroMech ensures the
              clearing of machine, certificate and paper works are completed to
              the highest standard.
            </p>
          </Textside>
          <Cardside>
            
          </Cardside>
        </Storyarea>
      </Container>
    </StoryCon>
  );
};

export default Story;
