import styled from "styled-components";
import Homebg from "../../agroImg/homeImg.png";

export const Herosec = styled.div`
  background-image: url(${Homebg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 580px;
  @media screen and (max-width: 450px) {
    background-position-x: -146px;
    height: 500px;
  }
`;
