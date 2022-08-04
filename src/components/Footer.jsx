import React from "react";
import { Container } from "./styled/Container.styled";
import { FooterArea } from "./styled/Footer.styled";
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

  return (
    <FooterArea>
      <Container></Container>
    </FooterArea>
  );
};

export default Footer;
