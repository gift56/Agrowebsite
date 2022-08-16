import React from "react";
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
import MailBox from "../agroImg/notificationImg.png";
import { FaUserAlt } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsCreditCard2Back } from "react-icons/bs";
import { FiClipboard } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

const Notification = () => {
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
