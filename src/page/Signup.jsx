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
  const [confirmEye, setConfirmeye] = useState(false);

  const showConfirmPassword = () => {
    setConfirmeye(!eye);
  };
  return (
    <Signuparea>
      <Container className="con">
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
                  type={!eye ? "password" : "text"}
                  id="password"
                  placeholder="*********************"
                />
                <div className="show">
                  {!eye ? (
                    <AiFillEyeInvisible onClick={showPassword} />
                  ) : (
                    <AiFillEye onClick={showPassword} />
                  )}
                </div>
              </div>
              <div className="formControl">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type={!confirmEye ? "password" : "text"}
                  id="confirmPassword"
                  placeholder="*********************"
                />
                <div className="show">
                  {!confirmEye ? (
                    <AiFillEyeInvisible onClick={showConfirmPassword} />
                  ) : (
                    <AiFillEye onClick={showConfirmPassword} />
                  )}
                </div>
              </div>
              <button className="btn">Sign up</button>
            </form>
            <div className="moreInfo">
              <div className="option">
                <p>or</p>
              </div>
              <Buttons className="secondbtn">
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
