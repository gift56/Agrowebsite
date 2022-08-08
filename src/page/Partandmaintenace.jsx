import React from "react";
import PMbg from "../agroImg/PMBg.png";
import AboutClients from "../components/AboutClients";
import AboutH from "../components/AboutH";
import PartM from "../components/PartM";
import PMfeatures from "../components/PMfeatures";
import { AboutHsec } from "../components/styled/Hero";
import Join from "../components/Join";


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
      <PMfeatures />
      <Join />
    </>
  );
};

export default Partandmaintenace;
