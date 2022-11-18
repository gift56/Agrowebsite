import React from "react";
import { Container } from "./styled/Container.styled";
import { FooterArea, Row, FooterRow, SocialRow } from "./styled/Footer.styled";
import Logo from "../agroImg/logo.svg";
import Twiter from "../agroImg/twitter.png";
import Facebook from "../agroImg/facebook.png";
import Instagram from "../agroImg/instagram.png";
import Whatsapp from "../agroImg/chat.png";
import Mail from "../agroImg/mail.png";

const Footer = () => {
  const Quicklinks = ["About Us", "Services", "Faqs"];

  const Usefullinks = ["Privacy Policy", "Terms and Conditions ", "Support"];

  const Contactus = [
    {
      img: Whatsapp,
      phone: "+1 575 567 5673",
    },
    {
      img: Mail,
      phone: "agromech@gmail.com",
    },
  ];

  const socialIcons = [
    {
      to: "https://m.facebook.com",
      icon: Facebook,
    },
    {
      to: "https://twitter.com/AsiughuE",
      icon: Twiter,
    },
    {
      to: "https://instagram.com",
      icon: Instagram,
    },
  ];

  return (
    <FooterArea>
      <Container>
        <FooterRow>
          <Row>
            <div className="brand">
              <img src={Logo} alt="" />
            </div>
          </Row>
          <Row>
            <h3>Quick Links</h3>
            <ul>
              {Quicklinks.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </Row>
          <Row>
            <h3>Useful Links</h3>
            <ul>
              {Usefullinks.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </Row>
          <Row>
            <h3>Contact Us</h3>
            <ul className="contact">
              {Contactus.map((link, index) => (
                <li key={index}>
                  <img src={link.img} alt="" />
                  <span>{link.phone}</span>
                </li>
              ))}
            </ul>
          </Row>
          <SocialRow>
            {socialIcons.map((icon, index) => (
              <a href={`${icon.to}`} target="_blank" rel="noopener noreferrer">
                <img src={icon.icon} key={index} />
              </a>
            ))}
          </SocialRow>
        </FooterRow>
        <div className="recomemdations">
          <p>
            <span>
              We have built a place where our customers can rely on to deliver
              geninue and excellent products to care for their farming and
              business
            </span>{" "}
            <span>
              needs. We are able to supply a wide range of machinery from
              reputable manufactures such as, New Holland, John Deere, JCB, Case
              and
            </span>{" "}
            <span>Massey Ferguson, to name a few.</span>
          </p>
        </div>
        <span className="copy">
          Copyright &copy; 2022. All rights reserved. AgroMech - RC 203884
        </span>
      </Container>
    </FooterArea>
  );
};

export default Footer;
