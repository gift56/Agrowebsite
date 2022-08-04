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
  @media screen and (max-width: ${({ theme }) => theme.mobile.phone}) {
    .logo {
      width: 139px;
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
  @media screen and (max-width: ${({ theme }) => theme.mobile.phone}) {
    gap: 1rem;
    div {
      img {
        width: 33.33px;
      }
      span {
        display: none;
      }
    }
  }
`;

export const HeaderTwo = styled.div`
  background-color: ${({ theme }) => theme.Greenbg};
  .ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    position: relative;
    .close {
      display: none;
    }
    li {
      color: ${({ theme }) => theme.whiteColor};
      font-size: 16px;
      font-weight: 400;
      cursor: pointer;
      padding-bottom: 5px;
      transition: all 300ms ease;
      &:hover {
        border-bottom: 2px solid ${({ theme }) => theme.whiteColor};
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile.tab}) {
    .show {
      display: none !important;
    }
    .togglebar {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 10px 0;
    }
    .ul {
      flex-direction: column;
      padding-top: 0;
      .close {
        display: flex;
        position: absolute;
        right: 0rem;
        top: 0.5rem;
      }
      li {
        margin-top: 20px;
      }
    }
  }
`;
