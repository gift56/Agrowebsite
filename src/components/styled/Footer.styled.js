import styled from "styled-components";

export const FooterArea = styled.footer``;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h3 {
    color: ${({ theme }) => theme.Greenbg};
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    li {
      font-size: 16px;
      font-weight: 400;
    }
  }
`;

export const FooterRow = styled.div`
  padding: 30px 0 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;
`;

export const SocialRow = styled.div``;
