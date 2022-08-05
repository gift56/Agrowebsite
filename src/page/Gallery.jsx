import React from "react";
import { AboutHsec } from "../components/styled/Hero";
import AboutH from "../components/AboutH";
import GalleryBg from "../agroImg/galleryBg.png";
import GalleryImgs from "../components/GalleryImgs";

const Gallery = () => {
  return (
    <>
      <AboutHsec bg={GalleryBg}>
        <AboutH title="Image Gallery" detailsT="Gallery " />
      </AboutHsec>
      <GalleryImgs />
    </>
  );
};

export default Gallery;
