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
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const PrightSide = styled.div``;
