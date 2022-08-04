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

  const socialIcons = [Twiter, Facebook, Instagram];

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
            {socialIcons.map((icon,index)=>(
                <img src=""  />
            ))}
          </SocialRow>
        </FooterRow>
      </Container>
    </FooterArea>
  );
};

export default Footer;
