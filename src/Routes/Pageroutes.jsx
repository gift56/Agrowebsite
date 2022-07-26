import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import Home from "../page/Home";
import About from "../page/About";
import Service from "../page/Service";
import Gallery from "../page/Gallery";
import Consultion from "../page/Consultion";
import Partandmaintenace from "../page/Partandmaintenace";
import Faq from "../page/Faq";
import Signin from "../page/Signin";
import Contact from "../page/Contact";
import Signup from "../page/Signup";
import Notification from "../page/Notification";
import Newsletters from "../page/Newsletters";
import Profile from "../components/Profile";
import ChangePassword from "../page/ChangePassword";

const Pageroutes = () => {
  const HeaderRoutes = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderRoutes />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/gallerys" element={<Gallery />} />
          <Route path="/consultion" element={<Consultion />} />
          <Route path="/partandmaintenace" element={<Partandmaintenace />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/account/profile" element={<Profile />} />
        <Route path="/account/notification" element={<Notification />} />
        <Route path="/account/newsletter" element={<Newsletters />} />
        <Route path="/account/changepassword" element={<ChangePassword />} />
      </Routes>
    </>
  );
};

export default Pageroutes;
