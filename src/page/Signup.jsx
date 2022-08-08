import React from "react";
import {
  Signuparea,
  SignupFormcontainer,
} from "../components/styled/Signup.styled";
import { Container } from "../components/styled/Container.styled";
import Createimg from "../agroImg/createImg.png";
import Logo from "../agroImg/logo.svg";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Signup = () => {
  return (
    <Signuparea>
      <Container>
        <SignupFormcontainer>
          <div className="leftside">
            <div className="logo">
              <img src={Logo} alt="/" />
            </div>
            <h2>Create Account</h2>
            <form>
              <div className="formControl">
                <label htmlFor="email">Email Address</label>
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className="formControl">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  id="password"
                  placeholder="*********************"
                />
                <div className="show">
                  <AiFillEyeInvisible />
                  <AiFillEye />
                </div>
              </div>
              <div className="formControl">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="text"
                  id="confirmPassword"
                  placeholder="*********************"
                />
                <div className="show">
                  <AiFillEyeInvisible />
                  <AiFillEye />
                </div>
              </div>
            </form>
            <div className="option">
              <p>or</p>
            </div>
          </div>
          <div className="rightside"></div>
        </SignupFormcontainer>
      </Container>
    </Signuparea>
  );
};

export default Signup;
