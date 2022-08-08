import React from "react";
import { Contactarea, FormContainer, FormTitle } from "./styled/Contact.styled";
import { Container } from "./styled/Container.styled";
import { ServiceCon } from "./styled/Service.styled";
import Mail from "../agroImg/mail.png";

const Contactform = () => {
  return (
    <ServiceCon>
      <Container>
        <Contactarea>
          <FormContainer>
            <FormTitle>
              <h3>Send us a Message</h3>
              <img src={Mail} alt="/" />
            </FormTitle>
            <form>
              <div className="formControl">
                <div className="input">
                  <label htmlFor="name">Name</label>
                  <div className="inputControls">
                    <input type="text" placeholder="First Name" id="name" />
                  </div>
                </div>
                <div className="input">
                  <label htmlFor="name" className="last">
                    Last
                  </label>
                  <div className="inputControls">
                    <input type="text" placeholder="Last Name" id="name" />
                  </div>
                </div>
              </div>
              <div className="formControl">
                <div className="input">
                  <label htmlFor="email">Email</label>
                  <div className="inputControls">
                    <input
                      type="text"
                      placeholder="example@gmail.com"
                      id="email"
                    />
                  </div>
                </div>
                <div className="input">
                  <label htmlFor="tel">Phone</label>
                  <div className="inputControls">
                    <input type="tel" placeholder="+234 90674748883" id="tel" />
                  </div>
                </div>
              </div>
              <div className="formControl">
                <div className="input">
                  <label htmlFor="company">Group or Company</label>
                  <div className="inputControls">
                    <input type="text" id="company" />
                  </div>
                </div>
              </div>
            </form>
          </FormContainer>
        </Contactarea>
      </Container>
    </ServiceCon>
  );
};

export default Contactform;
