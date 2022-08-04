import React from "react";
import Clients from "../components/Clients";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Offer from "../components/Offer";

const Home = () => {
  return (
    <>
      <Hero />
      <Clients />
      <Offer />
      <Features />
    </>
  );
};

export default Home;
