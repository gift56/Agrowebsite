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
  @media screen and (max-width: 1267px) {
    & > div:nth-child(2) {
      & > div {
        width: 350px;
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile.optionminLap}) {
    & > div:nth-child(2) {
      grid-template-columns: repeat(2, 1fr);
      & > div {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile.tab}) {
    & > div:nth-child(2) {
      grid-template-columns: 1fr;
    }
  }
  @media screen and (max-width: 469px) {
    & > div:nth-child(2) {
        padding: 0;
      & > div {
        padding: 1rem;
        h3 {
          font-size: 18px;
          line-height: 36px;
          
        }
        p {
          font-size: 15px;
          line-height: 30px;
        }
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
    font-weight: 500;
    font-size: 23px;
    line-height: 34px;
  }
  @media screen and (max-width: 469px) {
    gap: 0.5rem;
    img {
      width: 24%;
    }
    h2 {
      font-size: 18px;
    }
  }
`;
