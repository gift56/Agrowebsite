import React from "react";
import AboutBg from "../agroImg/aboutImg.png";
import AboutH from "../components/AboutH";
import Story from "../components/Story";
import { AboutHsec } from "../components/styled/Hero";

const About = () => {
  return (
    <>
      <AboutHsec bg={AboutBg}>
        <AboutH title="About Us" />
      </AboutHsec>
      <Story />
    </>
  );
};

export default About;
