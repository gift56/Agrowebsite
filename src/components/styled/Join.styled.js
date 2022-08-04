import styled from "styled-components";

export const JoinSection = styled.section`
  background-color: ${({ theme }) => theme.Greenbg};
`;

export const Joincontainer = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  padding: 10px 0;
`;

export const Imgarea = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  img {
    width: 412px;
  }
`;

export const Joinarea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    transform: translateX(15px);
    input {
      width: 100%;
      padding: 10px 0;
      background-color: ${({ theme }) => theme.inputColor};
      border: 1px solid ${({ theme }) => theme.buttonBg};
      border-radius: 8px 0px 0px 8px;
      padding-left: 20px;
      font-size: 15px;
      color: ${({ theme }) => theme.textColor};
      &:focus {
        outline: none;
        border: 2px solid ${({ theme }) => theme.buttonBg};
      }
    }
    button {
      background-color: ${({ theme }) => theme.buttonBg};
      color: ${({ theme }) => theme.whiteColor};
      border-color: ${({ theme }) => theme.buttonBg};
      border-radius: 0px 8px 8px 0px;
    }
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.whiteColor};
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
`;

export const Detail = styled.p`
  color: ${({ theme }) => theme.whiteColor};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
