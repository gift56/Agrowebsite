import styled from "styled-components";

export const ServiceCon = styled.section`
  background-color: ${({ theme }) => theme.featureBg};
`;

export const ServiceArea = styled.div`
  padding: 30px 0 90px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  & > div:nth-child(2) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 2rem;
    padding: 1rem;
    & > div {
      width: 397.59px;
      h3 {
        font-weight: 600;
        font-size: 24.1694px;
        line-height: 36px;
        color: #45914a;
      }
      p {
        color: #45914a;
        font-weight: 400;
        font-size: 18px;
        line-height: 41px;
      }
    }
  }
`;

export const TitleServe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  h2 {
    color: ${({ theme }) => theme.Greenbg};
  }
`;
