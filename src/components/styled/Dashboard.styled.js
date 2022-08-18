import styled from "styled-components";

export const DashCon = styled.section`
  background-color: ${({ theme }) => theme.featureBg};
`;

export const DashboardCon = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  padding-bottom: 3rem !important;
  @media screen and (max-width: ${({ theme }) => theme.mobile.tab}) {
    flex-direction: column;
    gap: 2rem;
  }
  @media screen and (max-width: 570px) {
    padding: 1rem 0;
  }
`;

export const LeftSideDash = styled.nav`
  width: 407px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .sidebar {
    background-color: ${({ theme }) => theme.whiteColor};
    min-height: 620px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 0.5rem;
    border-radius: 12px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07);
    z-index: 1;
    .fileForm {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h2 {
        font-size: 20px;
        font-weight: 600;
      }
      .imgChanger {
        position: relative;
        .profileImg {
          width: 88%;
        }
        img {
          cursor: pointer;
        }
        .editPen {
          position: absolute;
          bottom: 0;
          right: -7.2%;
        }
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      a {
        color: inherit;
        display: inherit;
        align-items: inherit;
        gap: inherit;
        width: inherit;
      }
      li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.5rem;
        width: 100%;
        padding: 1rem;
        color: ${({ theme }) => theme.textColor};
        border-radius: 4px;
        span {
          font-size: 16px;
          font-weight: 600;
        }
        svg {
          font-size: 18px;
          color: ${({ theme }) => theme.Greenbg};
        }
        &:hover {
          background-color: ${({ theme }) => theme.Greenbg};
          cursor: pointer;
          color: ${({ theme }) => theme.whiteColor};
          svg {
            color: ${({ theme }) => theme.whiteColor};
          }
        }
      }
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    background-color: ${({ theme }) => theme.Greenbg};
    color: ${({ theme }) => theme.whiteColor};
    font-weight: 600;
    font-size: 16px;
    a {
      display: inherit;
      align-items: inherit;
      justify-content: inherit;
      gap: inherit;
      background-color: inherit;
      font-size: inherit;
      font-weight: inherit;
    }
  }
  @media screen and (max-width: 570px) {
    width: 100%;
  }
  @media screen and (max-width: 290px) {
    ul {
      li {
        span {
          line-height: 24px;
        }
      }
    }
  }
`;

export const ProfileCon = styled.div`
  background-color: ${({ theme }) => theme.whiteColor};
  width: 100%;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07);

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    .formContainer {
      display: flex;
      justify-content: space-between;
      gap: 1.5rem;
      align-items: center;
      width: 100%;
      .formControl {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 0.5rem;
        label {
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: ${({ theme }) => theme.textColor};
        }
        input {
          background: rgba(33, 124, 44, 0.05);
          border: 1px solid ${({ theme }) => theme.Greenbg};
          border-radius: 4px;
          width: 100%;
          height: 53.06px;
          padding-left: 20px;
          font-size: 15px;
          color: ${({ theme }) => theme.textColor};
          &:focus {
            outline: none;
            border: 1px solid ${({ theme }) => theme.Greenbg};
          }
          &::placeholder {
            font-size: 15px;
            color: ${({ theme }) => theme.textColor};
          }
        }
      }
    }
    button {
      margin-top: 10px;
      background-color: ${({ theme }) => theme.Greenbg};
      color: ${({ theme }) => theme.whiteColor};
      font-size: 16px;
      font-weight: 600;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile.phone}) {
    form {
      .formContainer {
        flex-direction: column;
      }
    }
  }
  @media screen and (max-width: 570px) {
    padding: 1rem;
    h2 {
      font-size: 18px;
    }
    form {
      .formContainer {
        input {
          padding-left: 10px !important;
        }
      }
    }
  }
`;

export const NotificationCon = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07);
  min-height: 610px;
  .titleCon {
    background-color: ${({ theme }) => theme.whiteColor};
    padding: 1rem;
    margin-bottom: 10px;
    border: 0.5px solid ${({ theme }) => theme.Greenbg};
    border-radius: 12px;
    h3 {
      font-size: 20px;
      font-weight: 400;
      padding-left: 20px;
    }
  }
  .inbox {
    padding: 2rem;
    display: flex;
    justify-content: center;
  }
  .form {
    padding: 2rem;
    .align-start {
      align-items: flex-start;
      button {
        width: 50%;
        margin-top: 20px;
      }
    }
  }
  .inboxArea {
    background-color: ${({ theme }) => theme.whiteColor};
    min-height: inherit;
    border: 0.5px solid ${({ theme }) => theme.Greenbg};
    border-radius: 12px;
    .container {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
      width: 80%;
      form {
        display: flex;
        gap: 0.5rem;
        margin-top: 30px;
        #radio {
          accent-color: ${({ theme }) => theme.Greenbg};
        }
      }
      .MailArea {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        .text {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: ${({ theme }) => theme.textColor};
          h4 {
            font-weight: 400;
            font-size: 16px;
            text-align: center;
            line-height: 25px;
          }
          p {
            font-weight: 400;
            font-size: 13px;
            line-height: 20px;
            text-align: center;
          }
        }
      }
    }
    .titlearea {
      padding: 1rem;
      border-bottom: 0.5px solid ${({ theme }) => theme.Greenbg};
      h3 {
        font-size: 16px;
        font-weight: 400;
        padding-left: 20px;
      }
    }
    .options {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      .formControl {
        position: relative;
        width: 50%;
        input {
          background: transparent;
          border: 1px solid ${({ theme }) => theme.Greenbg};
          border-radius: 4px;
          width: 100%;
          height: 53.06px;
          padding-left: 20px;
          font-weight: 500;
          font-size: 15px;
          color: ${({ theme }) => theme.textColor};
          &:focus {
            outline: none;
            border: 1px solid ${({ theme }) => theme.Greenbg};
          }
          &::placeholder {
            font-size: 15px;
            color: ${({ theme }) => theme.textColor};
          }
        }
        .show {
          position: relative;
          svg {
            position: absolute;
            bottom: 18px;
            right: 3%;
            color: ${({ theme }) => theme.Greenbg};
            font-size: 20px;
            cursor: pointer;
          }
        }
        span {
          color: red;
          font-size: 12px;
        }
      }
      .optionradio {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        div {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          input {
            accent-color: ${({ theme }) => theme.Greenbg};
          }
          label {
            font-size: 15px;
            font-weight: 400;
          }
        }
      }
      button {
        background-color: ${({ theme }) => theme.Greenbg};
        color: ${({ theme }) => theme.whiteColor};
        font-size: 16px;
        font-weight: 300;
      }
      p {
        text-align: center;
        font-size: 16px;
        font-weight: 300;
        color: ${({ theme }) => theme.Greenbg};
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile.phone}) {
    .titleCon {
      h3 {
        font-size: 18px !important;
      }
    }
    .inboxArea {
      .options {
        .formControl {
          width: 100%;
        }
      }
      .optionradio {
        label {
          font-size: 13px !important;
        }
      }
    }
    .form {
      padding: 1rem !important;
      padding-top: 30px !important;
      .align-start {
        button {
          width: 100% !important;
        }
      }
    }
  }
`;
