import React from "react";
import { AboutHsec } from "../components/styled/Hero";
import ServiceBg from "../agroImg/service.png";
import AboutH from "../components/AboutH";
import ServiceT from "../components/ServiceT";
import AboutClients from "../components/AboutClients";
import Join from "../components/Join";

const Service = () => {
  return (
    <>
      <AboutHsec bg={ServiceBg}>
        <AboutH title="Our Service" detailsT="Our Service" />
      </AboutHsec>
      <ServiceT />
      <AboutClients />
      <Join />
    </>
  );
};

export default Service;
