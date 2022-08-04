import styled from "styled-components";

export const Headers = styled.header``;

export const Headerone = styled.div`
  background-color: ${({ theme }) => theme.whiteColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  .logo {
    width: 14%;
  }
  .toggle {
    display: none;
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
  @media screen and (max-width: ${({ theme }) => theme.mobile.minLap}) {
    form {
      width: 40%;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile.tab}) {
    form {
      display: none;
    }
    .logo {
      width: 20%;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;
  div {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    img {
      width: 33.33px;
    }
    span {
      font-size: 17px;
      font-weight: 400;
      color: #000000;
    }
  }
`;

export const HeaderTwo = styled.div`
  background-color: ${({ theme }) => theme.Greenbg};
`;

export const NavTwo = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  li {
    color: ${({ theme }) => theme.whiteColor};
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    padding-bottom: 5px;
    &:hover {
      border-bottom: 2px solid ${({ theme }) => theme.whiteColor};
    }
  }
`;
