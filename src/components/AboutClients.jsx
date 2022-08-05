import React from "react";
import { clients2 } from "../Data/Clients";
import { Container } from "./styled/Container.styled";
import { Clientarea } from "./styled/clients.styled";

const AboutClients = () => {
  return (
    <Clientarea>
      <Container>
        <div className="client">
          {clients2.map((client, index) => (
            <img src={client} alt="" key={index} />
          ))}
        </div>
      </Container>
    </Clientarea>
  );
};

export default AboutClients;
