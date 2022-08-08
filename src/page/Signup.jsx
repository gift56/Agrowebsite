import React from "react";
import {
  Signuparea,
  SignupFormcontainer,
} from "../components/styled/Signup.styled";
import { Container } from "../components/styled/Container.styled";
import Createimg from "../agroImg/createImg.png";

const Signup = () => {
  return (
    <Signuparea>
      <Container>
        <SignupFormcontainer>
          <div className="leftside"></div>
          <div className="rightside"></div>
        </SignupFormcontainer>
      </Container>
    </Signuparea>
  );
};

export default Signup;
