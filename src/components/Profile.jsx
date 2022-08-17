import React, { useState } from "react";
import Header from "./Header";
import { ProfileCon } from "./styled/Dashboard.styled";
import { Container } from "../components/styled/Container.styled";
import {
  DashboardCon,
  DashCon,
  LeftSideDash,
} from "../components/styled/Dashboard.styled";
import Box from "../agroImg/square.png";
import Pencil from "../agroImg/pencil.png";
import { FaUserAlt } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsCreditCard2Back } from "react-icons/bs";
import { FiClipboard } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Profile = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => {
    navigate("/");
    console.log(data);
  };
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
                    <Link to="/account">
                      <FaUserAlt /> <span>Profile</span>
                    </Link>
                  </li>
                  <li>
                    <FiClipboard />
                    <span>Orders</span>
                  </li>
                  <li>
                    <Link to="/notification">
                      <IoMailUnreadOutline />
                      <span>Notifications</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/changepassword">
                      <RiLockPasswordLine />
                      <span>Change Password</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/newsletter">
                      <BsCreditCard2Back />
                      <span>Newsletter Preferences</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <button className="btn">
                <BiLogOut size={25} />
                Log out
              </button>
            </LeftSideDash>
            <ProfileCon>
              <h2> Profile Settings</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="formContainer">
                  <div className="formControl">
                    <label htmlFor="firstname">First Name</label>
                    <input
                      type="text"
                      id="firstname"
                      placeholder="Simon"
                      {...register("firstname", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="formControl">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                      type="text"
                      id="lastname"
                      placeholder="Daniel"
                      {...register("lastname", {
                        required: true,
                      })}
                    />
                  </div>
                </div>
                <div className="formContainer">
                  <div className="formControl">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Simondaniel159@gmail.com"
                      {...register("email", {
                        required: true,
                        pattern: /\S+@\S+\.\S+/,
                      })}
                    />
                  </div>
                  <div className="formControl">
                    <label htmlFor="tel">Phone Number</label>
                    <input
                      type="tel"
                      id="tel"
                      placeholder="+447 49064556443"
                      {...register("tel", {
                        required: true,
                        minLength: 9,
                        maxLength: 12,
                      })}
                    />
                  </div>
                </div>
                <div className="formContainer">
                  <div className="formControl">
                    <label htmlFor="address">Home Address 1</label>
                    <input
                      type="text"
                      id="address"
                      placeholder="44, Boulevard d’Alsace"
                      {...register("address", {
                        required: true,
                        minLength: 5,
                      })}
                    />
                  </div>
                  <div className="formControl">
                    <label htmlFor="address2">
                      Home Address 2{" "}
                      <small
                        style={{
                          marginLeft: "10px",
                          color: "rgba(51, 51, 51, 0.5)",
                        }}
                      >
                        Optional
                      </small>
                    </label>
                    <input type="text" id="address2" placeholder="Address" />
                  </div>
                </div>
                <div className="formContainer">
                  <div className="formControl">
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      id="country"
                      placeholder="France"
                      {...register("country", {
                        required: true,
                        minLength: 3,
                        maxLength: 12,
                      })}
                    />
                  </div>
                  <div className="formControl">
                    <label htmlFor="code">Postal Code </label>
                    <input
                      type="text"
                      id="code"
                      placeholder="69200"
                      {...register("code", {
                        required: true,
                        minLength: 5,
                        maxLength: 12,
                      })}
                    />
                  </div>
                </div>
                <div className="formContainer">
                  <div className="formControl">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      placeholder="Manosque"
                      {...register("city", {
                        required: true,
                        minLength: 4,
                        maxLength: 12,
                      })}
                    />
                  </div>
                  <div className="formControl">
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      id="state"
                      placeholder="Lorraine"
                      {...register("state", {
                        required: true,
                        minLength: 4,
                        maxLength: 12,
                      })}
                    />
                  </div>
                </div>
                <div className="button">
                  <button className="btn">Save Changes</button>
                </div>
              </form>
            </ProfileCon>
          </DashboardCon>
        </Container>
      </DashCon>
    </>
  );
};

export default Profile;
