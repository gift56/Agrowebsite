import styled from "styled-components";

export const Signuparea = styled.section`
  background: #e5e5e5;
`;

export const SignupFormcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  .leftside {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    background-color: ${({ theme }) => theme.whiteColor};
    width: 40%;
    height: 700px;
    padding: 3rem;
  }
  .rightside {
    img {
      height: 700px;
    }
  }
`;
