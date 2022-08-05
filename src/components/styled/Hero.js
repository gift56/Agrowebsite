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

export const Herotext=styled.div``