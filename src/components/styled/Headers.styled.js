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
  border-bottom: 1px solid;
  .logo {
    width: 12%;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
