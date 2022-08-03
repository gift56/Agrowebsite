import styled from "styled-components";

export const Headers = styled.header`
  font-family: Arial, Helvetica, sans-serif;
`;

export const Headerone = styled.div`
  background-color: ${({ theme }) => theme.whiteColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  .logo {
    width: 12%;
  }
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    input {
      width: 100%;
      padding: 10px 0;
      background-color: ${({ theme }) => theme.inputColor};
      border: 1px solid ${({ theme }) => theme.Greenbg};
      border-radius: 8px 0px 0px 8px;
      padding-left: 20px;
      font-size: 15px;
      color: ${({ theme }) => theme.textColor};
      &:focus {
        outline: none;
        border: 2px solid ${({ theme }) => theme.Greenbg};
      }
    }
    button {
      background-color: ${({ theme }) => theme.Greenbg};
      color: ${({ theme }) => theme.whiteColor};
      border-color: ${({ theme }) => theme.Greenbg};
      border-radius: 0px 8px 8px 0px;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  div {
    display: flex;
    align-items: center;
    gap: 5px;
    img {
      width: 33.33px;
    }
  }
`;
