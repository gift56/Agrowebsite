import React from "react";
import PMbg from "../agroImg/PMBg.png";
import AboutClients from "../components/AboutClients";
import AboutH from "../components/AboutH";
import PartM from "../components/PartM";
import { AboutHsec } from "../components/styled/Hero";

const Partandmaintenace = () => {
  return (
    <>
      <AboutHsec bg={PMbg}>
        <AboutH
          title="Parts and Maintenace "
          detailsT="Parts and Maintenance "
        />
      </AboutHsec>
      <AboutClients />
      <PartM />
    </>
  );
};

export default Partandmaintenace;
