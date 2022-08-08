import styled from "styled-components";

export const Clientarea = styled.section`
  padding: 10px 0;
  .client {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: ${({ theme }) => theme.mobile.tab}) {
      flex-direction: column;
    }
  }
`;
