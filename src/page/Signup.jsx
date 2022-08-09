import React, { useState } from "react";
import {
  Signuparea,
  SignupFormcontainer,
} from "../components/styled/Signup.styled";
import { Container } from "../components/styled/Container.styled";
import Createimg from "../agroImg/createImg.png";
import Logo from "../agroImg/logo.svg";
import Goggle from "../agroImg/goggles.png";
import Facebook from "../agroImg/facebooks.png";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Buttons } from "../components/styled/Features.styled";
import { Link } from "react-router-dom";

const Signup = () => {
  const [eye, setEye] = useState(false);

  const showPassword = () => {
    setEye(!eye);
  };
  return (
    <Signuparea>
      <Container>
        <SignupFormcontainer>
          <div className="leftside">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="/" />
              </Link>
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
                  <AiFillEyeInvisible onClick={showPassword} />
                  <AiFillEye onClick={showPassword} />
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
            <Buttons>
              <button className="btn sign">
                <img src={Goggle} alt="/" />
                Sign up with Google
              </button>
              <button className="btn sign">
                <img src={Facebook} alt="/" />
                Sign up with Facebook
              </button>
            </Buttons>
            <span>
              Already have an account yet? <Link to="login">Sign in</Link>
            </span>
          </div>
          <div className="rightside">
            <img src={Createimg} alt="/" />
          </div>
        </SignupFormcontainer>
      </Container>
    </Signuparea>
  );
};

export default Signup;
