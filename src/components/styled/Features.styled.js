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
  column-gap: 0;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 1360px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.mobile.minLap}) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: ${({ theme }) => theme.mobile.phone}) {
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Featurecards = styled.div`
  width: 335px;
  padding: 1rem;
  @media screen and (max-width: ${({ theme }) => theme.mobile.phone}) {
    width: 100%;
    padding: 0;
  }
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

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  button {
    padding: 10px 10px;
    width: 90%;
    background-color: ${({ theme }) => theme.whiteColor};
    color: ${({ theme }) => theme.textColor};
    border-color: ${({ theme }) => theme.whiteColor};
    font-size: 14px;
    font-weight: 400;
  }
`;

export const Greencard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 20px 1rem 15px;
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
  .starP {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
      align-items: center;
      gap: 5px;
      img {
        cursor: pointer;
      }
    }
  }
`;
