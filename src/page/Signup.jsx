import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Signuparea,
  SignupFormcontainer,
} from "../components/styled/Signup.styled";
import { Container } from "../components/styled/Container.styled";
import Createimg from "../agroImg/createImg.png";
import Logo from "../agroImg/logo.svg";
import Goggle from "../agroImg/goggles.png";
import Bg from "../agroImg/forgetBg.png";
import Facebook from "../agroImg/facebooks.png";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Buttons } from "../components/styled/Features.styled";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [eye, setEye] = useState(false);
  const [confirmEye, setConfirmeye] = useState(false);
  const navigate = useNavigate();

  const showPassword = () => {
    setEye(!eye);
  };

  const showConfirmPassword = () => {
    setConfirmeye(!confirmEye);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => {
    navigate("/account/profile");
    console.log(data);
  };
  const password = watch("password");

  return (
    <Signuparea bg={Bg}>
      <Container className="con">
        <SignupFormcontainer>
          <div className="leftside">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="/" />
              </Link>
            </div>
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="formControl">
                <label htmlFor="email">Email Address</label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: true,
                    pattern: /\S+@\S+\.\S+/,
                    message: "Invalid Email Address",
                  })}
                />
                {errors.email && (
                  <span style={{ color: "red" }}>{errors.email.message}</span>
                )}
              </div>
              <div className="formControl">
                <label htmlFor="password">Password</label>
                <input
                  type={!eye ? "password" : "text"}
                  id="password"
                  placeholder="*********************"
                  autoComplete="off"
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 6,
                      message: "Password must be longer than six Character",
                    },
                    maxLength: {
                      value: 20,
                      message: "Maximum should be at least 20",
                    },
                  })}
                />
                <div className="show">
                  {!eye ? (
                    <AiFillEyeInvisible onClick={showPassword} />
                  ) : (
                    <AiFillEye onClick={showPassword} />
                  )}
                </div>
                {errors.password && <span>{errors.password.message}</span>}
              </div>
              <div className="formControl">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type={!confirmEye ? "password" : "text"}
                  id="confirmPassword"
                  placeholder="*********************"
                  autoComplete="off"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) =>
                      value === password || "Password does not match",
                  })}
                />
                <div className="show">
                  {!confirmEye ? (
                    <AiFillEyeInvisible onClick={showConfirmPassword} />
                  ) : (
                    <AiFillEye onClick={showConfirmPassword} />
                  )}
                </div>
                {errors.confirmPassword && (
                  <span>{errors.confirmPassword.message}</span>
                )}
              </div>
              <button className="btn">Sign up</button>
            </form>
            <div className="moreInfo">
              <div className="option">
                <p>or</p>
              </div>
              <Buttons className="secondbtn">
                <button className="btn sign">
                  <a
                    href="https://www.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Goggle} alt="/" />
                    Sign up with Google
                  </a>
                </button>
                <button className="btn sign fb">
                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Facebook} alt="/" />
                    Sign up with Facebook
                  </a>
                </button>
              </Buttons>
              <span>
                Already have an account yet? <Link to="/login">Sign in</Link>
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
