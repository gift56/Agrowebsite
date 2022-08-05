import styled from "styled-components";

export const StoryCon = styled.section`
  background-color: ${({ theme }) => theme.featureBg};
`;

export const Storyarea = styled.div`
  padding: 60px 0 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Textside = styled.div`
  flex: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;
    position: relative;
    color: ${({ theme }) => theme.Greenbg};
    &::before {
      content: "";
      position: absolute;
      top: -9px;
      width: 100px;
      height: 2px;
      background-color: #45914a;
    }
  }
  h4 {
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    color: ${({ theme }) => theme.textColor};
  }
  p {
    text-align: justify;
    font-weight: 500;
    font-size: 18px;
    line-height: 42px;
    width: 100%;
    span {
      display: block;
    }
  }
`;

export const Cardside = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 59vh;
`;