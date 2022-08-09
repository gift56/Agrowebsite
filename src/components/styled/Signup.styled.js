import styled from "styled-components";

export const Signuparea = styled.section`
  background: #e5e5e5;
`;

export const SignupFormcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 110vh;
  .leftside {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    background-color: ${({ theme }) => theme.whiteColor};
    width: 40%;
    min-height: 700px;
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
      gap: 1.5rem;
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
      }
    }
    .moreInfo {
      display: flex;
      gap: 0.5rem;
      flex-direction: column;
      .option {
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          position: relative;
          font-size: 18px;
          font-weight: 400;
          line-height: 27px;
        }
      }
    }
  }
  .rightside {
    img {
      height: 790px;
    }
  }
`;
