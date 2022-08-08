import styled from "styled-components";

export const Accordiumarea = styled.div`
  padding: 25px 0 60px;
  gap: 2rem;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AccordiumTitlearea = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  text-align: center;
  .ques {
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    color: ${({ theme }) => theme.textColor};
  }
`;

export const FaqTitlearea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 120%;
  background-color: ${({ theme }) => theme.Faqbg};
  .leftside {
    background-color: ${({ theme }) => theme.Faqbg};
    min-height: 167.5px;
    width: 55%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.whiteColor};
    font-weight: 600;
    h2 {
      font-size: 23px;
      line-height: 38px;
    }
    p {
      font-size: 19px;
      line-height: 30px;
    }
  }
  .rightside {
    img {
      height: 10.4rem;
    }
  }
`;

export const AccordiumWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  height: 55.34px;
  width: 93%;
  transform: translateX(45px);
  background: rgba(33, 124, 44, 0.05);
  border: 1.5px solid ${({ theme }) => theme.Greenbg};
  border-radius: 5.8251px;
  input {
    border: none;
    outline: none;
    width: 90%;
    height: 100%;
    padding-left: 10px;
    background-color: transparent;
    font-weight: 400;
    font-size: 18px;
    color: #b3b3b3;
    &::placeholder {
      color: #b3b3b3;
      font-weight: 400;
      font-size: 18px;
    }
  }
`;

export const Wrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-weight: 400;
  font-size: 14px;
  line-height: 27px;
`;

export const Wrappedarea = styled.div``;

export const AccordiumBox = styled.div`
  width: 1010px;
  min-height: 814px;
  background: #406a3a;
  padding: 5rem;
`;
