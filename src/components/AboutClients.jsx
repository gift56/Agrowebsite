import React from "react";
import { clients2 } from "../Data/Clients";
import { Container } from "./styled/Container.styled";
import { Clientarea } from "./styled/clients.styled";
import { motion } from "framer-motion";

const AboutClients = () => {
  return (
    <Clientarea>
      <Container>
        <div className="client">
          {clients2.map((client, index) => (
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 3 }}
              src={client}
              alt=""
              key={index}
            />
          ))}
        </div>
      </Container>
    </Clientarea>
  );
};

export default AboutClients;
