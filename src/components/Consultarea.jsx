import React, { useState } from "react";
import { ServiceCon, ServiceArea, TitleText } from "./styled/Service.styled";
import { Container } from "./styled/Container.styled";
import styled from "styled-components";
import ContactLogo from "../agroImg/contactlg.png";
import CloseModal from "../agroImg/closeX.png";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { GrMail } from "react-icons/gr";
import { AiOutlineWhatsApp } from "react-icons/ai";

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
            <div className="consultionForm">
              <h3>Complete the form or email agromech@gmail.com</h3>
              <form>
                <div className="form-control">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" />
                </div>
                <div className="form-control">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" />
                </div>
                <div className="form-control">
                  <label htmlFor="tel">Phone Number</label>
                  <input type="tel" id="tel" />
                </div>
                <div className="form-control">
                  <label htmlFor="msg">Compose Message</label>
                  <input type="text" id="msg" />
                </div>
              </form>
              <span>Find Us</span>
              <div className="modalFooter">
                <div className="social">
                  <FaTwitterSquare />
                  <FaFacebookSquare />
                  <FaInstagramSquare />
                </div>
                <div className="info">
                  <div>
                    <GoLocation />
                    <span>Global</span>
                  </div>
                  <div>
                    <AiOutlineWhatsApp />
                    <span>+1 575 567 5673</span>
                  </div>
                  <div>
                    <GrMail />
                    <span>agromech@gmail.com</span>
                  </div>
                </div>
              </div>
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
