import React from "react";
import { clients } from "../Data/Clients";
import { Clientarea } from "./styled/clients.styled";
import { Container } from "./styled/Container.styled";

const Clients = () => {
  return (
    <Clientarea>
      <Container>
        <div className="client">
          {clients.map((client, index) => (
            <img src={client} alt="" key={index} />
          ))}
        </div>
      </Container>
    </Clientarea>
  );
};

export default Clients;
