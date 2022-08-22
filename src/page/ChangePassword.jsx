import React, { useState } from "react";
import Header from "../components/Header";
import { Container } from "../components/styled/Container.styled";
import {
  DashboardCon,
  DashCon,
  LeftSideDash,
  NotificationCon,
} from "../components/styled/Dashboard.styled";
import Box from "../agroImg/square.png";
import Pencil from "../agroImg/pencil.png";
import { FaUserAlt } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsCreditCard2Back } from "react-icons/bs";
import { FiClipboard } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const ChangePassword = () => {
  const [eye, setEye] = useState(false);
  const [currenteye, setCurrenteye] = useState(false);
  const [confirmEye, setConfirmeye] = useState(false);
  const navigate = useNavigate();

  const showPassword = () => {
    setEye(!eye);
  };

  const showCurrentPassword = () => {
    setCurrenteye(!currenteye);
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
    navigate("/account");
    console.log(data);
  };

  const password = watch("password");
  return (
    <>
      <Header />
      <DashCon>
        <Container>
          <DashboardCon>
            <LeftSideDash>
              <div className="sidebar">
                <div className="fileForm">
                  <form>
                    <label htmlFor="editProfile" className="imgLabel">
                      <img src={Box} alt="" className="profileImg" />
                      <img src={Pencil} alt="" className="editPen" />
                    </label>
                    <input
                      type="file"
                      id="editProfile"
                      style={{ display: "none" }}
                      accept="*.png *.jpg *.jpeg"
                    />
                  </form>
                  <h2>Simon Daniel</h2>
                </div>
                <ul>
                  <li>
                    <Link to="/account/profile">
                      <FaUserAlt /> <span>Profile</span>
                    </Link>
                  </li>
                  <li>
                    <FiClipboard />
                    <span>Orders</span>
                  </li>
                  <li>
                    <Link to="/account/notification">
                      <IoMailUnreadOutline />
                      <span>Notifications</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/account/changepassword">
                      <RiLockPasswordLine />
                      <span>Change Password</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/account/newsletter">
                      <BsCreditCard2Back />
                      <span>Newsletter Preferences</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <button className="btn">
                <Link to="/" style={{ width: "100%" }}>
                  <BiLogOut size={25} />
                  Log out
                </Link>
              </button>
            </LeftSideDash>
            <NotificationCon>
              <div className="titleCon">
                <h3>Change Password</h3>
              </div>
              <div className="inboxArea form">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="options align-start"
                >
                  <div className="formControl">
                    <input
                      type={!currenteye ? "password" : "text"}
                      id="currentpassword"
                      placeholder="Current Password"
                      {...register("currentpassword", {
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
                      {!currenteye ? (
                        <AiOutlineEyeInvisible onClick={showCurrentPassword} />
                      ) : (
                        <AiOutlineEye onClick={showCurrentPassword} />
                      )}
                    </div>
                    {errors.currentpassword && (
                      <span>{errors.currentpassword.message}</span>
                    )}
                  </div>
                  <div className="formControl">
                    <input
                      type={!eye ? "password" : "text"}
                      id="password"
                      placeholder="New Password"
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
                        <AiOutlineEyeInvisible onClick={showPassword} />
                      ) : (
                        <AiOutlineEye onClick={showPassword} />
                      )}
                    </div>
                    {errors.password && <span>{errors.password.message}</span>}
                  </div>
                  <div className="formControl">
                    <input
                      type={!confirmEye ? "password" : "text"}
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      {...register("confirmPassword", {
                        required: true,
                        validate: (value) =>
                          value === password || "Password does not match",
                      })}
                    />
                    <div className="show">
                      {!confirmEye ? (
                        <AiOutlineEyeInvisible onClick={showConfirmPassword} />
                      ) : (
                        <AiOutlineEye onClick={showConfirmPassword} />
                      )}
                    </div>
                    {errors.confirmPassword && (
                      <span>{errors.confirmPassword.message}</span>
                    )}
                  </div>
                  <button className="btn">Sign up</button>
                </form>
              </div>
            </NotificationCon>
          </DashboardCon>
        </Container>
      </DashCon>
    </>
  );
};

export default ChangePassword;
