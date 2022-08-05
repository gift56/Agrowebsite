import styled from "styled-components";

export const StoryCon = styled.section`
  background-color: ${({ theme }) => theme.featureBg};
`;

export const Storyarea = styled.div`
  padding: 40px 0 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Textside = styled.div`
  flex: 1;
`;

export const Cardside = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
