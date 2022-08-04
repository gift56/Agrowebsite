import styled from "styled-components";
import Bg from "../../agroImg/thirdbg.png";

export const Offerarea = styled.section`
  padding: 80px 0 20px;
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 699px;
`;

export const Welcometxt = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Leftside = styled.div`
  flex: 1.3;
`;

export const Rightside = styled.div`
  flex: 1;
`;
