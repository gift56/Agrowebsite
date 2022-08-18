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
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Consultarea = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => {
    setShowModal(false);
    navigate("/");
    console.log(data);
  };

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
              <button className="btn" onClick={() => setShowModal(true)}>
                Contact Us
              </button>
            </TitleText>
          </ServiceArea>
        </Container>
      </ServiceCon>
      <Modal showModal={!showModal}>
        <div className="card">
          <div className="container">
            <div className="heading">
              <img src={ContactLogo} alt="/" />
              <img
                src={CloseModal}
                alt="/"
                onClick={() => setShowModal(false)}
              />
            </div>
            <div className="content">
              <div className="consultionForm">
                <h3>Complete the form or email agromech@gmail.com</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      {...register("name", {
                        required: true,
                      })}
                      className={errors ? "" : "error"}
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      {...register("email", {
                        required: true,
                        pattern: /\S+@\S+\.\S+/,
                      })}
                      className={errors ? "" : "error"}
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor="tel">Phone Number</label>
                    <input
                      type="tel"
                      id="tel"
                      {...register("tel", {
                        required: true,
                        minLength: 9,
                        maxLength: 12,
                      })}
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor="msg">Compose Message</label>
                    <input
                      type="text"
                      id="msg"
                      {...register("msg", {
                        required: true,
                        minLength: 5,
                      })}
                    />
                  </div>
                  <div className="button">
                    <button className="btn">Compose Message</button>
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
        </div>
      </Modal>
    </>
  );
};

export default Consultarea;

const Modal = styled.div`
  display: ${({ showModal }) => (!showModal ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 382px;
  left: 0;
  text-align: center;
  place-items: center;
  width: 100vw;
  height: 100%;
  z-index: 2;
  .card {
    background-color: ${({ theme }) => theme.Greenbg};
    width: 1340px;
    margin: 30px 0;
    padding: 1rem;
    .container {
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
      .error {
        border-color: red !important;
      }
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
        .button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-top: 20px;
          button {
            background-color: ${({ theme }) => theme.whiteColor};
            color: ${({ theme }) => theme.Greenbg};
            font-size: 17px;
            font-weight: 500;
          }
        }
      }
    }
    span {
      color: ${({ theme }) => theme.whiteColor};
      font-size: 16px;
      font-weight: 500;
    }
    .modalFooter {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      .social,
      .info {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        svg {
          color: ${({ theme }) => theme.whiteColor};
          font-size: 17px;
          cursor: pointer;
        }
      }
      .info {
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          span {
            font-weight: 400;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1326px) {
    .card {
      width: 100%;
      .content {
        .consultionForm {
          width: 70%;
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile.minLap}) {
    .card {
      .content {
        .consultionForm {
          width: 90%;
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile.tab}) {
    .card {
      .content {
        .consultionForm {
          h3 {
            font-size: 20px;
          }
          form {
            .form-control {
              label {
                font-size: 14px;
              }
            }
          }
          span {
            font-size: 14px;
          }
          .modalFooter {
            gap: 1rem;
            .social,
            .info {
              gap: 1.5rem;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile.phone}) {
    .card {
      .container {
        .heading {
          img {
            &:nth-child(1) {
              width: 25%;
            }
          }
        }
      }
      .content {
        .modalFooter {
          flex-direction: column;
        }
      }
    }
  }
  @media screen and (max-width: 586px) {
    .card {
      .container {
        padding: 1rem !important;
        .heading {
          img {
            &:nth-child(1) {
              width: 50%;
            }
          }
        }
      }
      .content {
        .consultionForm {
          h3 {
            font-size: 16px;
          }
          form {
            .button {
              button {
                font-size: 14px;
              }
            }
          }
        }
        .modalFooter {
          flex-direction: column;
          .info {
            flex-direction: column;
          }
        }
      }
    }
  }
`;
