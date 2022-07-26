import React from "react";
import { Container } from "./styled/Container.styled";
import {
  JoinSection,
  Imgarea,
  Joinarea,
  Title,
  Detail,
  Joincontainer,
} from "./styled/Join.styled";
import Crank from "../agroImg/joinImg.png";
import { motion } from "framer-motion";

const Join = () => {
  return (
    <JoinSection>
      <Container>
        <Joincontainer>
          <Imgarea>
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              src={Crank}
              alt="/"
            />
          </Imgarea>
          <Joinarea>
            <Title>New to AgroMech?</Title>
            <Detail>
              Then join our mailing list to get weekly updates of new stocks and
              offers
            </Detail>
            <form>
              <input type="text" placeholder="Enter your email address" />
              <button className="btn">Submit</button>
            </form>
          </Joinarea>
        </Joincontainer>
      </Container>
    </JoinSection>
  );
};

export default Join;
