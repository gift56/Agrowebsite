import React from "react";
import { AboutHsec } from "../components/styled/Hero";
import AboutH from "../components/AboutH";
import GalleryBg from "../agroImg/galleryBg.png";

const Gallery = () => {
  return (
    <>
      <AboutHsec bg={GalleryBg}>
        <AboutH title="Image Gallery" detailsT="Gallery " />
      </AboutHsec>
    </>
  );
};

export default Gallery;
