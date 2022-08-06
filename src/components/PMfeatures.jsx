import React from "react";
import { Container } from "./styled/Container.styled";
import { TitleText, ServiceCon } from "./styled/Service.styled";
import {
  Buttons,
  Featurecards,
  Featurecontainer,
  Featuresarea,
  Greencard,
  Imgcontainer,
} from "./styled/Features.styled";
import { FeatureData2 } from "../Data/Feature";

import Star from "../agroImg/starg.png";
const PMfeatures = () => {
  const stars = [Star, Star, Star, Star, Star];
  return (
    <ServiceCon>
      <Container>
        <Featuresarea>
          <TitleText>
            <h2>Featured Products</h2>
          </TitleText>
          <Featurecontainer>
            {FeatureData2.map((item, index) => (
              <Featurecards key={index}>
                <Imgcontainer>
                  <img src={item.img} alt="/" />
                </Imgcontainer>
                {item.greenCard.map((item, index) => (
                  <Greencard key={index}>
                    <h3>{item.title}</h3>
                    <div className="starP">
                      <p>{item.price}</p>
                      <div>
                        {stars.map((star, i) => (
                          <img src={star} alt="" key={i} />
                        ))}
                      </div>
                    </div>
                    <Buttons>
                      <button className="btn">Add to Cart</button>
                      <button className="btn">View</button>
                    </Buttons>
                  </Greencard>
                ))}
              </Featurecards>
            ))}
          </Featurecontainer>
        </Featuresarea>
      </Container>
    </ServiceCon>
  );
};

export default PMfeatures;
