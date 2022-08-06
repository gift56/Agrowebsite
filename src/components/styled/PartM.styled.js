import styled from "styled-components";

export const PartContainer = styled.section`
  background-color: ${({ theme }) => theme.PBg};
`;

export const PartArea = styled.div`
  padding: 25px 0 20px;
  display: flex;
  justify-content: center;
`;

export const PleftSide = styled.div`
  flex: 1;
  div {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 2rem;
    background-color: ${({ theme }) => theme.whiteColor};
    width: 691px;
    height: 658px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px 8px 95px 8px;
  }
`;

export const PrightSide = styled.div``;
