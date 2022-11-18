import React from "react";
import {
  Offerarea,
  Welcometxt,
  Leftside,
  Rightside,
  Card,
  Cardcontainer,
} from "./styled/Offer.styled";
import { Container } from "./styled/Container.styled";
import { CardData } from "../Data/Cardcontent";
import { motion } from "framer-motion";

const Offer = () => {
  return (
    <Offerarea>
      <Container>
        <Welcometxt>
          <Leftside>
            <motion.h3
              initial={{ opacity: 0, y: "-100px" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              What we offer
            </motion.h3>
            <div className="description">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <span>First Class Provider of </span>
                <span>Agricultural Machineries</span>
              </motion.h3>
            </div>
          </Leftside>
          <Rightside>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <span>
                AgroMech Company is an online based supplier of machines
              </span>{" "}
              <span>
                and equipments for agricultural and farming industry, We are
              </span>{" "}
              <span>
                dedicated to providing a first class service to all of our
              </span>
              <span>customers.</span>
            </motion.p>
          </Rightside>
        </Welcometxt>
        <Cardcontainer>
          {CardData.map((item, index) => (
            <Card key={index}>
              <img src={item.img} alt="" />
              <h2>{item.title}</h2>
              <p>{item.details}</p>
            </Card>
          ))}
        </Cardcontainer>
      </Container>
    </Offerarea>
  );
};

export default Offer;
