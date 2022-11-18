import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styled/Container.styled";
import { BsGridFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import LogoImg from "../agroImg/logo.svg";
import User from "../agroImg/user.png";
import Heart from "../agroImg/heart.png";
import Cart from "../agroImg/cart.png";
import { Headers, Headerone, Nav, HeaderTwo } from "./styled/Headers.styled";
import "../App.css";

const Header = ({ count, cart }) => {
  const [isMobile, setIsmobile] = useState(false);
  return (
    <Headers>
      <Container>
        <Headerone>
          <Link to="/" className="logo">
            <img src={LogoImg} alt="logo" className="logo" />
          </Link>
          <form>
            <input type="text" />
            <button className="btn">Search</button>
          </form>
          <Nav>
            <Link to="/signup">
              <div>
                <img src={User} alt="/" />
                <span>Account</span>
              </div>
            </Link>
            <div>
              <img src={Heart} alt="/" />
              <span>Wishlist</span>
            </div>
            <div className="showIcon">
              <img src={Cart} alt="/" />
              <span>Cart</span>
              {/* {cart ? <p>{count}</p> : null} */}
              <p>{count}</p>
            </div>
          </Nav>
        </Headerone>
      </Container>
      <HeaderTwo>
        <Container>
          <div className="togglebar">
            {isMobile ? (
              ""
            ) : (
              <BsGridFill
                style={{ color: "#ffff" }}
                size={28}
                onClick={() => setIsmobile(true)}
              />
            )}
          </div>
          <ul className={`ul ${!isMobile ? "show" : ""}`}>
            <AiOutlineClose
              onClick={() => setIsmobile(false)}
              style={{ color: "#ffff" }}
              size={28}
              className="close"
            />
            <li>
              <Link to="/" onClick={() => setIsmobile(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsmobile(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/service" onClick={() => setIsmobile(false)}>
                Services
              </Link>
            </li>
            <li>Stock</li>
            <li>Hire</li>
            <li>
              <Link to="/gallerys" onClick={() => setIsmobile(false)}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/consultion" onClick={() => setIsmobile(false)}>
                Consultation
              </Link>
            </li>
            <li>
              <Link to="/partandmaintenace" onClick={() => setIsmobile(false)}>
                Parts & Maintenance{" "}
              </Link>
            </li>
            <li>
              <Link to="/faq" onClick={() => setIsmobile(false)}>
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsmobile(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </Container>
      </HeaderTwo>
    </Headers>
  );
};

export default Header;
