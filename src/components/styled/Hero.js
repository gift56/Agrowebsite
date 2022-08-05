import styled from "styled-components";

export const Herosec = styled.section`
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 580px;
  @media screen and (max-width: 450px) {
    background-position-x: -146px;
    height: 500px;
  }
`;

export const AboutHsec = styled.section`
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 580px;
  @media screen and (max-width: 450px) {
    background-position-x: -146px;
    height: 500px;
  }
`;

export const Herotext = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  h2 {
    font-weight: 500;
    font-size: 45px;
    line-height: 68px;
    color: ${({ theme }) => theme.whiteColor};
  }
  p {
    color: ${({ theme }) => theme.whiteColor};
    font-weight: 400;
    font-size: 19px;
    line-height: 29px;
    display: flex;
    align-items: center;
    span {
      display: flex;
      align-items: center;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile.phone}) {
    h2 {
      font-size: 35px;
    }
  }
`;
