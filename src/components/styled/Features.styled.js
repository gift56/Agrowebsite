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

export const Featurecontainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
`;

export const Featurecards = styled.div`
  width: 325px;
  padding: 1rem;
`;

export const Imgcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.whiteColor};
  width: 100%;
  border: 1px solid ${({ theme }) => theme.Greenbg};
  border-radius: 5.21046px;
  height: 180px;
  img {
    width: fit-content;
  }
`;

export const Buttons = styled.div``;

export const Greencard = styled.div``;
