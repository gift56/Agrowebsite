import { motion } from "framer-motion";
import styled from "styled-components";

export const ChooseCon = styled.section`
  background-color: ${({ theme }) => theme.featureBg};
`;

export const ChooseArea = styled.div`
  padding: 20px 0 90px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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

export const ChooseCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: ${({ theme }) => theme.mobile.tab}) {
    flex-direction: column;
  }
`;

export const ChooseCard = styled(motion.div)`
  padding: 2rem 2rem;
  background-color: ${({ theme }) => theme.whiteColor};
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 11px;

  h3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.textColor};
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.textColor};
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile.optionminLap}) {
    padding: 1rem 1rem;
    p {
      font-size: 14px;
    }
  }
`;
