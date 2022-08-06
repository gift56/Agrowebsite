import React from "react";
import { AboutHsec } from "../components/styled/Hero";
import AboutH from "../components/AboutH";
import ConsultBg from "../agroImg/consultBg.png";
import Consultarea from "../components/Consultarea";
import AboutClients from "../components/AboutClients";
import Join from "../components/Join";

const Consultion = () => {
  return (
    <>
      <AboutHsec bg={ConsultBg}>
        <AboutH title="Consultation" detailsT="Consultation" />
      </AboutHsec>
      <Consultarea />
      <AboutClients />
      <Join />
    </>
  );
};

export default Consultion;
