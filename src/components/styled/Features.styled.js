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

export const Greencard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 20px 0 10px;
  padding-left: 1rem;
  width: 100%;
  border-radius: 6.94728px 6.94728px 0px 0px;
  background-color: ${({ theme }) => theme.Greenbg};
  transform: translateY(-7px);
  h3 {
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
    color: ${({ theme }) => theme.whiteColor};
  }
  p {
    font-size: 13px;
    font-weight: 500;
    line-height: 19px;
    color: ${({ theme }) => theme.whiteColor};
  }
`;
