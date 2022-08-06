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
`;

export const PrightSide = styled.div`
  display: flex;
  align-items: center;
  img{
    width: 90%;
  }
`;
