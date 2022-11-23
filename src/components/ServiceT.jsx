import React from "react";
import { ServiceData } from "../Data/ServiceData";
import { Container } from "./styled/Container.styled";
import { ServiceArea, ServiceCon, TitleServe } from "./styled/Service.styled";
import { ChooseCardContainer, ChooseCard } from "./styled/Choose.styled";
import Line from "../agroImg/line.png";
import { motion } from "framer-motion";

const ServiceT = () => {
  return (
    <ServiceCon>
      <Container>
        <ServiceArea>
          <TitleServe>
            <motion.img
              initial={{ opacity: 0, x: "-50px" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              src={Line}
              alt="/"
            />
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 3 }}
            >
              Our Service
            </motion.h2>
            <motion.img
              initial={{ opacity: 0, x: "50px" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              src={Line}
              alt="/"
            />
          </TitleServe>
          <ChooseCardContainer>
            {ServiceData.map((card, index) => (
              <ChooseCard key={index}>
                <img src={card.img} alt="/" />
                <h3>{card.title}</h3>
                <p>{card.details}</p>
              </ChooseCard>
            ))}
          </ChooseCardContainer>
        </ServiceArea>
      </Container>
    </ServiceCon>
  );
};

export default ServiceT;
