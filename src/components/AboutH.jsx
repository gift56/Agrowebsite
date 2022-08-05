import React from "react";
import { Herotext } from "./styled/Hero";
import { IoMdHome } from "react-icons/io";
import { BiChevronRight } from "react-icons/bi";

const AboutH = ({ title }) => {
  return (
    <Herotext>
      <h2>{title}</h2>
      <p>
        <IoMdHome />
        <span>
          <BiChevronRight />
          About Us
        </span>
      </p>
    </Herotext>
  );
};

export default AboutH;
