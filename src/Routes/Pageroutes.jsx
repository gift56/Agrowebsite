import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../page/Home";
import About from "../page/About";
import Service from "../page/Service";
import Gallery from "../page/Gallery";
import Consultion from "../page/Consultion";
import Partandmaintenace from "../page/Partandmaintenace";
import Faq from "../page/Faq";
import Contact from "../page/Contact";


const Pageroutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="gallerys" element={<Gallery />} />
        <Route path="consultion" element={<Consultion />} />
        <Route path="partandmaintenace" element={<Partandmaintenace />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Pageroutes;
