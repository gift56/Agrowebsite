import styled from "styled-components";
import Bg from "../../agroImg/thirdbg.png";

export const Offerarea = styled.section`
  padding: 90px 0 20px;
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 699px;
`;

export const Welcometxt = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Leftside = styled.div`
  flex: 1.3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  h3 {
    color: ${({ theme }) => theme.whiteColor};
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
  }
  .description {
    margin-top: 20px;
    h3 {
      font-weight: 700;
      span {
        display: block;
      }
    }
  }
`;

export const Rightside = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  height: 11vh;
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.whiteColor};
    span {
      display: block;
    }
  }
`;

export const Cardcontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 52px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.whiteColor};
  width: 329px;
  height: 307px;
  border-radius: 8px;
`;
