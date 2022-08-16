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
      form {
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
`;

export const NotificationCon = styled.div`
  /* background-color: ${({ theme }) => theme.whiteColor}; */
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07);
`;
