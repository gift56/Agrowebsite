import styled from "styled-components";

export const JoinSection = styled.section`
  background-color: ${({ theme }) => theme.Greenbg};
`;

export const Joincontainer = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  padding: 10px 0;
  padding-bottom: 0;
`;

export const Imgarea = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  img {
    width: 412px;
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile.minLap}) {
    img {
      width: 86%;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile.phone}) {
    display: none;
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
      padding: 12px 0;
      background-color: ${({ theme }) => theme.inputColor};
      border: 1px solid ${({ theme }) => theme.buttonBg};
      border-radius: 6px 0px 0px 6px;
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
      border-radius: 0px 3px 3px 0px;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile.phone}) {
    align-items: center;
    width: 100%;
    padding: 1rem;
    form {
      width: 100%;
      input{
        font-size: 13px;
      }
      button {
        padding: 8px 2px;
      }
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
  @media screen and (max-width: ${({ theme }) => theme.mobile.minLap}) {
    font-size: 14px;
  }
`;
