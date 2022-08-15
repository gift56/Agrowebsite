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
  width: 307px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  .sidebar {
    background-color: ${({ theme }) => theme.whiteColor};
    min-height: 530px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07);
    z-index: 1;
    .fileForm {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      form {
        position: relative;
        .editPen {
          position: absolute;
          top: 0;
        }
      }
    }
  }
`;
