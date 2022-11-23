import React from "react";
import { Herotext } from "./styled/Hero";
import { IoMdHome } from "react-icons/io";
import { BiChevronRight } from "react-icons/bi";
import { motion } from "framer-motion";

const AboutH = ({ title, detailsT }) => {
  return (
    <Herotext>
      <motion.h2
        initial={{ opacity: 0, y: "-50" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3 }}
      >
        <IoMdHome />
        <span>
          <BiChevronRight />
          {detailsT}
        </span>
      </motion.p>
    </Herotext>
  );
};

export default AboutH;
