import React from "react";
import {
  Featuresarea,
  Title,
  Featurecontainer,
  Featurecards,
  Imgcontainer,
  Greencard,
  Buttons,
} from "./styled/Features.styled";
import { Container } from "./styled/Container.styled";
import { FeatureData } from "../Data/Feature";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <Featuresarea>
      <Container>
        <Title>Featured Products</Title>
        <Featurecontainer>
          {FeatureData.map((feature, index) => (
            <Featurecards key={index}>
              <Imgcontainer>
                <motion.img
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                  src={feature.img}
                  alt="/"
                />
              </Imgcontainer>
              {feature.greenCard.map((item, index) => (
                <Greencard key={index}>
                  <motion.h3
                    initial={{ opacity: 0, y: "-30px" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                  >
                    {item.price}
                  </motion.p>
                  <Buttons>
                    <motion.button
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 2 }}
                      className="btn"
                    >
                      View
                    </motion.button>
                    <motion.button
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 2 }}
                      className="btn"
                    >
                      Add to Cart
                    </motion.button>
                  </Buttons>
                </Greencard>
              ))}
            </Featurecards>
          ))}
        </Featurecontainer>
      </Container>
    </Featuresarea>
  );
};

export default Features;
