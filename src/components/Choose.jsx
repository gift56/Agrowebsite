import React from "react";
import {
  ChooseArea,
  ChooseCon,
  ChooseTitle,
  ChooseCardContainer,
  ChooseCard,
} from "./styled/Choose.styled";
import { Container } from "./styled/Container.styled";
import Star from "../agroImg/star.png";
import { ChooseData } from "../Data/ChooseData";
import { motion } from "framer-motion";

const Choose = () => {
  return (
    <ChooseCon>
      <Container>
        <ChooseArea>
          <ChooseTitle>
            <motion.h2
              initial={{ opacity: 0, y: "-30px" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 3 }}
            >
              Why Choose Us
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 4 }}
              className="star"
            >
              <img src={Star} alt="" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: "-30px" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 3 }}
            >
              AgroMech is a First Class Provider of Agricultural Machineries and
              Equipments
            </motion.p>
          </ChooseTitle>
          <ChooseCardContainer>
            {ChooseData.map((card, index) => (
              <ChooseCard key={index}>
                <img src={card.img} alt="/" />
                <h3>{card.title}</h3>
                <p>{card.details}</p>
              </ChooseCard>
            ))}
          </ChooseCardContainer>
        </ChooseArea>
      </Container>
    </ChooseCon>
  );
};

export default Choose;
