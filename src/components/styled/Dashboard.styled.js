import styled from "styled-components";

export const DashCon = styled.section`
  background-color: ${({ theme }) => theme.featureBg};
  min-height: 100vh;
`;

export const DashboardCon = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
`;

export const LeftSideDash = styled.nav`
  width: 300px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  svg {
    font-size: 18px;
  }
  .sidebar {
    background-color: ${({ theme }) => theme.whiteColor};
    min-height: 530px;
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
        &:hover {
          background-color: ${({ theme }) => theme.Greenbg};
          cursor: pointer;
          color: ${({ theme }) => theme.whiteColor};
        }
      }
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background-color: ${({ theme }) => theme.Greenbg};
    color: ${({ theme }) => theme.whiteColor};
  }
`;
