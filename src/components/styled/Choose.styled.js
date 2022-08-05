import styled from "styled-components";

export const ChooseCon = styled.section`
  background-color: ${({ theme }) => theme.featureBg};
`;

export const ChooseArea = styled.div`
  padding: 20px 0 30px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ChooseTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;
    color: ${({ theme }) => theme.textColor};
  }
  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 34px;
    color: ${({ theme }) => theme.textColor};
  }
`;

export const ChooseCardContainer = styled.div``;

export const ChooseCard = styled.div``;
