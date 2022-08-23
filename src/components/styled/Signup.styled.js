import styled from "styled-components";

export const Signuparea = styled.section`
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  .radius {
    border-radius: 7px !important;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SignupFormcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  .leftside {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.whiteColor};
    width: 40%;
    padding: 2.5rem;
    .logo {
      img {
        width: 90%;
      }
    }
    h2 {
      font-size: 30px;
      font-weight: 500;
      line-height: 45px;
      color: ${({ theme }) => theme.textColor};
    }
    form {
      display: flex;
      gap: 0.5rem;
      flex-direction: column;
      width: 100%;
      button {
        background-color: ${({ theme }) => theme.Greenbg};
        border: 1px solid ${({ theme }) => theme.Greenbg};
        color: ${({ theme }) => theme.whiteColor};
      }
      .formControl {
        display: flex;
        gap: 0.5rem;
        flex-direction: column;
        position: relative;
        label {
          font-weight: 500;
          font-size: 16px;
          line-height: 22px;
          color: ${({ theme }) => theme.textColor};
        }
        input {
          background: rgba(33, 124, 44, 0.05);
          border: 1px solid ${({ theme }) => theme.Greenbg};
          border-radius: 4px;
          width: 100%;
          height: 53.06px;
          padding-left: 20px;
          font-weight: 500;
          font-size: 15px;
          color: #b3b3b3;
          &:focus {
            outline: none;
            border: 1px solid ${({ theme }) => theme.Greenbg};
          }
          &::placeholder {
            font-size: 15px;
            color: #b3b3b3;
          }
        }
        .show {
          position: relative;
          svg {
            position: absolute;
            bottom: 25px;
            right: 3%;
            color: #549269;
            font-size: 20px;
            cursor: pointer;
          }
        }
        span {
          color: red;
          font-size: 14px;
          line-height: 0;
        }
      }
    }
    .moreInfo {
      display: flex;
      gap: 0.5rem;
      flex-direction: column;
      width: 100%;
      padding: 10px 0;
      .option {
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          position: relative;
          font-size: 18px;
          font-weight: 400;
          line-height: 27px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          &::before {
            content: "";
            position: absolute;
            top: 56%;
            left: 0%;
            width: 45%;
            height: 1px;
            background-color: ${({ theme }) => theme.textColor};
          }
          &::after {
            content: "";
            position: absolute;
            top: 56%;
            right: 0%;
            width: 45%;
            height: 1px;
            background-color: ${({ theme }) => theme.textColor};
          }
        }
      }
      .secondbtn {
        display: flex;
        gap: 5rem;
        width: 100%;
        .sign {
          background: #fbfbfb;
          border: 0.818886px solid ${({ theme }) => theme.Greenbg};
          border-radius: 3.27555px;
          font-weight: 400;
          a {
            display: flex;
            align-items: center;
            gap: 10px;
          }
        }
      }
      span {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: rgba(51, 51, 51, 0.8);
        padding: 20px 0;
        a {
          color: ${({ theme }) => theme.Greenbg};
          font-weight: 500;
        }
      }
    }
  }
  .rightside {
    img {
      margin-top: 8px;
      height: 43.5rem;
    }
  }
  @media screen and (max-width: 1488px) {
    .secondbtn {
      gap: 1rem !important;
    }
  }
  @media screen and (max-width: 1314px) {
    .secondbtn {
      .sign {
        gap: 0 !important;
      }
    }
  }
  @media screen and (max-width: 1329px) {
    .secondbtn {
      .fb {
        font-size: 12px !important;
      }
    }
  }
  @media screen and (max-width: 1278px) {
    .secondbtn {
      .sign {
        img {
          display: none;
        }
        justify-content: center;
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile.optionminLap}) {
    .secondbtn {
      .sign {
        font-size: 12px;
        line-height: 14px;
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile.tab2}) {
    .rightside {
      img {
        display: none;
      }
    }
    .leftside {
      width: 100%;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile.phone}) {
    .formControl {
      span {
        line-height: 18px !important;
      }
    }
  }
  @media screen and (max-width: 403px) {
    .leftside {
      padding: 1rem;
      h2 {
        font-size: 25px;
        line-height: 30px;
      }
      form {
        label {
          font-size: 14px !important;
        }
      }
    }
    span {
      font-size: 14px !important;
    }
  }
`;
