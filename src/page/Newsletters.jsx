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
import { FaUserAlt } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsCreditCard2Back } from "react-icons/bs";
import { FiClipboard } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

const Newsletters = () => {
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
                <Link to="/" style={{ width: "100%" }}>
                  <BiLogOut size={25} />
                  Log out
                </Link>
              </button>
            </LeftSideDash>
            <NotificationCon>
              <div className="titleCon">
                <h3>Newsletter Preferences</h3>
              </div>
              <div className="inboxArea">
                <div className="titlearea">
                  <h3>SUBSCRIBE TO</h3>
                </div>
                <form className="options">
                  <div className="optionradio">
                    <div>
                      <input type="radio" name="radio" id="daily" />
                      <label htmlFor="daily">Daily Newsletter</label>
                    </div>
                    <div>
                      <input type="radio" name="radio" id="week" />
                      <label htmlFor="week">Weekly Newsletter</label>
                    </div>
                    <div>
                      <input type="radio" name="radio" id="not" />
                      <label htmlFor="not">
                        I don’t want to receive notifications from newsletter
                      </label>
                    </div>
                  </div>
                  <button className="btn">SAVE</button>
                  <p>UNSUBSCRIBE FROM NEWSLETTER</p>
                </form>
              </div>
            </NotificationCon>
          </DashboardCon>
        </Container>
      </DashCon>
    </>
  );
};

export default Newsletters;
