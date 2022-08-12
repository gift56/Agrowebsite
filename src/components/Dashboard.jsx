import React from "react";
import DashboardPages from "../page/DashboardPages";
import { Container } from "./styled/Container.styled";
import { DashboardCon, LeftSideDash } from "./styled/Dashboard.styled";
import { ServiceCon } from "./styled/Service.styled";
import Box from "../agroImg/square.png";
import Pencil from "../agroImg/pencil.png";
import { FaUserAlt } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsCreditCard2Back } from "react-icons/bs";
import { FiClipboard } from "react-icons/fi";

const Dashboard = () => {
  return (
    <ServiceCon>
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
              </div>
              <ul>
                <li>
                  <FaUserAlt /> Profile
                </li>
                <li>
                  <FiClipboard />
                  Orders
                </li>
                <li>
                  <IoMailUnreadOutline />
                  Notifications
                </li>
                <li>
                  <RiLockPasswordLine />
                  Change Password
                </li>
                <li>
                  <BsCreditCard2Back />
                  Newsletter Preferences
                </li>
              </ul>
            </div>
          </LeftSideDash>
          <DashboardPages />
        </DashboardCon>
      </Container>
    </ServiceCon>
  );
};

export default Dashboard;
