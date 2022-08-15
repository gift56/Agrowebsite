import React from "react";
import DashboardPages from "../page/DashboardPages";
import { Container } from "./styled/Container.styled";
import { DashboardCon, DashCon, LeftSideDash } from "./styled/Dashboard.styled";
import Box from "../agroImg/square.png";
import Pencil from "../agroImg/pencil.png";
import { FaUserAlt } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsCreditCard2Back } from "react-icons/bs";
import { FiClipboard } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";

const Dashboard = () => {
  return (
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
                  <FaUserAlt /> <span>Profile</span>
                </li>
                <li>
                  <FiClipboard />
                  <span>Orders</span>
                </li>
                <li>
                  <IoMailUnreadOutline />
                  <span>Notifications</span>
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
              <BiLogOut />
              Log out
            </button>
          </LeftSideDash>
          <DashboardPages />
        </DashboardCon>
      </Container>
    </DashCon>
  );
};

export default Dashboard;
