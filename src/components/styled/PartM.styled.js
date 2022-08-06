import styled from "styled-components";

export const PartContainer = styled.section`
  background-color: ${({ theme }) => theme.PBg};
`;

export const PartArea = styled.div`
  padding: 25px 0 20px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: ${({ theme }) => theme.mobile.tab2}) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
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
    min-height: 658px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px 8px 95px 8px;
    h2 {
      font-weight: 600;
      font-size: 25px;
      line-height: 38px;
      letter-spacing: -0.011em;
      color: #474747;
    }
    p {
      font-weight: 500;
      font-size: 15px;
      line-height: 37px;
      text-align: justify;
      letter-spacing: -0.011em;
      color: ${({ theme }) => theme.textColor};
      span {
        display: block;
      }
    }
    button {
      background-color: #efe503;
      border-color: #efe503;
      color: #45914a;
    }
    img {
      position: absolute;
      right: 3%;
      top: 1%;
    }
  }
  @media screen and (max-width: 1290px) {
    div {
      width: 90%;
      p {
        font-size: 14px;
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile.optionminLap}) {
    div {
      h2 {
        font-size: 18px;
      }
      p {
        line-height: 20px;
      }
    }
  }
  @media screen and (max-width: 375px) {
    div {
      width: 100%;
      border-radius: 8px;
      padding: 1rem;
      h2 {
        line-height: 20px;
      }
      button {
        font-size: 13px;
      }
      img {
        width: 7%;
      }
    }
  }
`;

export const PrightSide = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 90%;
  }
  @media screen and (max-width: 375px) {
    img {
      width: 100%;
    }
  }
`;
