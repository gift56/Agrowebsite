import React from "react";
import Gallery1 from "../agroImg/gall1.png";
import Gallery2 from "../agroImg/gall2.png";
import Gallery3 from "../agroImg/gall3.png";
import {
  ServiceCon,
  ServiceArea,
  TitleServe,
  NextBtns,
} from "./styled/Service.styled";
import { ChooseCardContainer } from "./styled/Choose.styled";
import { Container } from "./styled/Container.styled";
import {
  MdOutlineNavigateNext,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import { AiFillBackward } from "react-icons/ai";

const GalleryImgs = () => {
  const GalleryW = [
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery3,
    Gallery1,
    Gallery2,
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery3,
    Gallery1,
    Gallery2,
    Gallery1,
    Gallery2,
    Gallery3,
  ];
  return (
    <ServiceCon>
      <Container>
        <ServiceArea>
          <TitleServe>
            <h2> Gallery</h2>
          </TitleServe>
          <ChooseCardContainer>
            {GalleryW.map((item, index) => (
              <img src={item} alt="" key={index} />
            ))}
          </ChooseCardContainer>
          <NextBtns></NextBtns>
        </ServiceArea>
      </Container>
    </ServiceCon>
  );
};

export default GalleryImgs;
