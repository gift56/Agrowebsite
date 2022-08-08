import styled from "styled-components";

export const Contactarea = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0 30px;
`;

export const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.whiteColor};
  padding: 3rem;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  gap: 1rem;
  .last {
    visibility: hidden;
  }
  input {
    background: rgba(33, 124, 44, 0.05);
    border: 1px solid ${({ theme }) => theme.Greenbg};
    border-radius: 4px;
    width: 284.49px;
    height: 53.06px;
    padding-left: 20px;
    font-size: 15px;
    color: #b3b3b3;
    &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.Greenbg};
    }
    &::placeholder {
      font-size: 15px;
      color: #b3b3b3;
    }
  }
  .formControl {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    gap: 1rem;
    .input {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      label {
        font-weight: 400;
        font-size: 14.4961px;
        line-height: 22px;
      }
    }
  }
`;

export const FormTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: ${({ theme }) => theme.textColor};
  }
`;
