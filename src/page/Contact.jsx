import React from "react";
import { AboutHsec } from "../components/styled/Hero";
import Contactbg from "../agroImg/contact.png";
import AboutH from "../components/AboutH";
import Contactform from "../components/Contactform";
import AboutClients from "../components/AboutClients";
import Join from "../components/Join";

const Contact = () => {
  return (
    <>
      <AboutHsec bg={Contactbg}>
        <AboutH title="Contact Us" detailsT="Contact Us" />
      </AboutHsec>
      <Contactform />
      <AboutClients />
      <Join />
    </>
  );
};

export default Contact;
