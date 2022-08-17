import React, { useState } from "react";
import { ServiceCon, ServiceArea, TitleText } from "./styled/Service.styled";
import { Container } from "./styled/Container.styled";
import styled from "styled-components";
import ContactLogo from "../agroImg/contactlg.png";
import CloseModal from "../agroImg/closeX.png";

const Consultarea = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ServiceCon>
        <Container>
          <ServiceArea>
            <TitleText>
              <h2>For Consultation</h2>
              <p>
                <span>
                  We are always looking forward to give the best products and
                  services, Our round the clock
                </span>
                <span>
                  customer service agents ensures smooth shopping experience
                </span>
              </p>
              <button className="btn">Contact Us</button>
            </TitleText>
          </ServiceArea>
        </Container>
      </ServiceCon>
      <Modal showModal={!showModal}>
        <div className="card">
          <div className="container">
            <div className="heading">
              <img src={ContactLogo} alt="/" />

              <img src={CloseModal} alt="/" />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Consultarea;

const Modal = styled.div`
  /* display: ${({ showModal }) => (!showModal ? "flex" : "none")};
   */
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  background-color: #21202060;
  place-items: center;
  width: 100vw;
  height: 100%;
`;
