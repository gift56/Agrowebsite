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
            <div className="content">
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
                  <button className="btn">Compose Message</button>
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
  z-index: 2;
  .card {
    background-color: ${({ theme }) => theme.Greenbg};
    width: 1340px;
    padding: 1rem;
    .container {
      height: 100%;
      padding: 2rem;
      .heading {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        img {
          cursor: pointer;
          &:nth-child(1) {
            width: 15%;
          }
        }
      }
    }
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    .consultionForm {
      width: 58%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      h3 {
        font-size: 27px;
        font-weight: 500;
        color: ${({ theme }) => theme.whiteColor};
      }
      form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        .form-control {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-direction: column;
          gap: 0.5rem;
          width: 100%;
          label {
            font-size: 17px;
            font-weight: 500;
            color: ${({ theme }) => theme.whiteColor};
          }
          input {
            border: none;
            background-color: transparent;
            color: ${({ theme }) => theme.whiteColor};
            width: 100%;
            border-bottom: 2px solid ${({ theme }) => theme.whiteColor};
            padding: 10px 3px;
            outline: none;
            font-size: 15px;
            transition: 3s;
          }
        }
      }
    }
  }
`;
