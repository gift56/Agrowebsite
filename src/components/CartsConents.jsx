import React from "react";
import { FeatureData } from "../Data/Feature";
import { CardContentsStyles } from "./styled/Headers.styled";

const CartsConents = ({ id }) => {
  const MachinesPart = FeatureData.find((item) => item.id === parseInt(id));

  return (
    <CardContentsStyles>
      <img src={`${MachinesPart.img}`} alt="" />
    </CardContentsStyles>
  );
};

export default CartsConents;
