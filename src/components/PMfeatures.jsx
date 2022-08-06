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
        </Featuresarea>
        <Featurecontainer>
          {FeatureData2.map((item, index) => (
            <Featurecards key={index}>
              <Imgcontainer>
                <img src={item.img} alt="/" />
              </Imgcontainer>
              {item.greenCard.map((item, index) => (
                <Greencard key={index}>
                  <h3>{item.title}</h3>
                  <div>
                    <p>{item.price}</p>
                    {stars.map((star, i) => (
                      <img src={star} alt="" key={index} />
                    ))}
                  </div>
                  <Buttons>
                    <button className="btn">View</button>
                    <button className="btn">Add to Cart</button>
                  </Buttons>
                </Greencard>
              ))}
            </Featurecards>
          ))}
        </Featurecontainer>
      </Container>
    </ServiceCon>
  );
};

export default PMfeatures;
