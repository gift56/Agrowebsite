import React from "react";
import { Contactarea } from "./styled/Contact.styled";
import { Container } from "./styled/Container.styled";
import { ServiceCon } from "./styled/Service.styled";
import Mail from "../agroImg/mail.png";

const Contactform = () => {
  return (
    <ServiceCon>
      <Container>
        <Contactarea>
          <div className="title">
            <h3>Send us a Message</h3>
            <img src={Mail} alt="/" />
          </div>
          <form>
            <div className="formControl">
                <label htmlFor="name">Name</label>
                <div className="inputControls">
                    
                </div>
            </div>
          </form>
        </Contactarea>
      </Container>
    </ServiceCon>
  );
};

export default Contactform;
