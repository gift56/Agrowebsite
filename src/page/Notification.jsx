import React, { useState } from "react";
import Header from "../components/header/Header";
import { Container } from "../components/styled/Container.styled";
import {
  DashboardCon,
  DashCon,
  LeftSideDash,
  NotificationCon,
} from "../components/styled/Dashboard.styled";
import Pencil from "../agroImg/pencil.png";
import MailBox from "../agroImg/notificationImg.png";
import { FaUserAlt } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsCreditCard2Back } from "react-icons/bs";
import { FiClipboard } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../App.css";

const Notification = () => {
  const [userImg, setUserimg] = useState(
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAYAAABUx/9/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHvSURBVHgB7dOhUSxBFEbh2z3z3Aqee/XUSCSEABGQARABSCQSCRlABhABhLASOTjkInDLXrqrSII55xMz1dee+kv8mC6nvbpaXWSWsyg5hX63jHUp8bjbbh/mm9e5n0r/TFf7UxmG5yhlCi1L5pxfX0c9eDE0QA/++edwrON4mm3coeXqQ15tL2sLfRJavJJ5Wtv/ILR8bd01hGFsEGODGBvE2CDGBjE2iLFBjA1ibBBjgxgbxNggxgYxNoixQYwNYmwQY4MYG8TYIMYGMTaIsUGMDWJsEGODGBvE2CDGBjE2iLFBjA1ibBBjgxgbxNggxgYxNoixQYwNYmwQY4MYG8TYIMYGMTaIsUGMDWJsEGODGBvE2CDGBjE2iLFBjA1ibBBjgxgbxNggxgYxNoixQYwNYmwQY4MYG8TYIMYGMTaIsUGMDWJsEGODGBvE2CDGBjE2iLFBjA1ibBBjgxgbxNggxgYxNoixQYwNYmwQY4MYG8TYIMYGMTaIsUGMDWJsEGODGBvE2CDGBjE2iLFBjA1ibBBjgxgbxNggxgYxNoixQWpmmUME6xolH0KLlxFPNcbxNorrXrTedxzv63y93uQwHBl8oVrX3rd1nof+3ry8b/aO/z/FbvdRIv6207/Q75bxliXu2qLPW+j3fvoGF99LGjzzYvYAAAAASUVORK5CYII="
  );
  const handleImageChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserimg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
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
                  <form className="imgChanger">
                    <label htmlFor="editProfile" className="imgLabel">
                      <img src={userImg} alt="" className="profileImg" />
                      <img src={Pencil} alt="" className="editPen" />
                    </label>
                    <input
                      type="file"
                      id="editProfile"
                      style={{ display: "none" }}
                      accept="image/*"
                      onChange={handleImageChange}
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
                <h3>Inbox Messages</h3>
              </div>
              <div className="inboxArea inbox">
                <div className="container">
                  <form>
                    <input type="radio" id="radio" defaultChecked />
                    <label htmlFor="radio">Recieve push notifications</label>
                  </form>
                  <div className="MailArea">
                    <img src={MailBox} alt="/" />
                    <div className="text">
                      <h4>You don’t have any messages</h4>
                      <p>
                        Here you will be able to see all the messages we send
                        you, stay tuned
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </NotificationCon>
          </DashboardCon>
        </Container>
      </DashCon>
    </>
  );
};

export default Notification;
