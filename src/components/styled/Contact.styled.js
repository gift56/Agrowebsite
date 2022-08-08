import styled from "styled-components";

export const Contactarea = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0 30px;
`;

export const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.whiteColor};
  padding: 3rem;
  width: 40%;
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
