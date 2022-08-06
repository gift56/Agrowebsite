import React from "react";
import { AboutHsec } from "../components/styled/Hero";
import AboutH from "../components/AboutH";
import ConsultBg from "../agroImg/consultBg.png";
import Consultarea from "../components/Consultarea";

const Consultion = () => {
  return (
    <>
      <AboutHsec bg={ConsultBg}>
        <AboutH title="Consultation" detailsT="Consultation" />
      </AboutHsec>
      <Consultarea />
    </>
  );
};

export default Consultion;
