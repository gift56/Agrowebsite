import styled from "styled-components";

export const Featuresarea = styled.section`
  background-color: ${({ theme }) => theme.featureBg};
  padding: 20px 0 35px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.Greenbg};
  font-size: 23px;
  font-weight: 600;
  line-height: 34px;
  margin-bottom: 20px;
`;
