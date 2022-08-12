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
  }
`;
