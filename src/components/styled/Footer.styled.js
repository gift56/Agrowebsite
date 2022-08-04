import styled from "styled-components";

export const FooterArea = styled.footer`
  min-height: 481px;
  .copy {
    display: block;
    text-align: center;
    color: ${({ theme }) => theme.textColor};
    padding-bottom: 30px;
  }
  .recomemdations {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    p {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-weight: 400;
      font-size: 16px;
      line-height: 33px;
      color: ${({ theme }) => theme.textColor};
      span {
        display: block;
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile.phone}) {
    .recomemdations {
      p {
        text-align: center;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
  .copy {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    color: ${({ theme }) => theme.Greenbg};
    font-weight: 500;
    font-size: 18px;
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
  .contact {
    li {
      display: flex;
      align-items: center;
      gap: 8px;
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
  @media screen and (max-width: ${({ theme }) => theme.mobile.tab}) {
    gap: 2rem;
    margin-bottom: 30px;
  }
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;
