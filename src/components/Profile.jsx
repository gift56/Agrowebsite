import React from "react";
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
import { Link } from "react-router-dom";

const Profile = () => {
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
                    <RiLockPasswordLine />
                    <span>Change Password</span>
                  </li>
                  <li>
                    <BsCreditCard2Back />
                    <span>Newsletter Preferences</span>
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
              <form>
                <div className="formContainer">
                  <div className="formControl">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" id="firstname" placeholder="Simon" />
                  </div>
                  <div className="formControl">
                    <label htmlFor="firstname">Last Name</label>
                    <input type="text" id="firstname" placeholder="Daniel" />
                  </div>
                </div>
                <div className="formContainer">
                  <div className="formControl">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Simondaniel159@gmail.com"
                    />
                  </div>
                  <div className="formControl">
                    <label htmlFor="tel">Phone Number</label>
                    <input type="tel" id="tel" placeholder="+447 49064556443" />
                  </div>
                </div>
                <div className="formContainer">
                  <div className="formControl">
                    <label htmlFor="address">Home Address 1</label>
                    <input
                      type="text"
                      id="address"
                      placeholder="44, Boulevard d’Alsace"
                    />
                  </div>
                  <div className="formControl">
                    <label htmlFor="address2">Home Address 2</label>
                    <input type="text" id="address2" placeholder="Address" />
                  </div>
                </div>
                <div className="formContainer">
                  <div className="formControl">
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country" placeholder="France" />
                  </div>
                  <div className="formControl">
                    <label htmlFor="code">Postal Code </label>
                    <input type="text" id="code" placeholder="69200" />
                  </div>
                </div>
                <div className="formContainer">
                  <div className="formControl">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" placeholder="Manosque" />
                  </div>
                  <div className="formControl">
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" placeholder="Lorraine" />
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
