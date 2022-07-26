import React from "react";
import AboutBg from "../agroImg/aboutImg.png";
import AboutClients from "../components/AboutClients";
import { AboutHsec } from "../components/styled/Hero";
import AboutH from "../components/AboutH";
import Choose from "../components/Choose";
import Story from "../components/Story";
import Join from "../components/Join";

const About = () => {
  return (
    <>
      <AboutHsec bg={AboutBg}>
        <AboutH title="About Us" detailsT="About Us"/>
      </AboutHsec>
      <Story />
      <Choose />
      <AboutClients />
      <Join />
    </>
  );
};

export default About;
