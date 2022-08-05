import React from "react";
import { Herotext } from "./styled/Hero";
import { IoMdHome } from "react-icons/io";
import { BiChevronRight } from "react-icons/bi";

const AboutH = () => {
  return (
    <Herotext>
      <h2>About Us</h2>
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
