import React from "react";
import { clients } from "../Data/Clients";
import { Clientarea } from "./styled/clients.styled";
import { Container } from "./styled/Container.styled";
import { motion } from "framer-motion";

const Clients = () => {
  return (
    <Clientarea>
      <Container>
        <div className="client">
          {clients.map((client, index) => (
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
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

export default Clients;
