import React, { useState } from "react";
import { AccordiumData } from "../Data/AccordiumData";
import { ServiceCon } from "./styled/Service.styled";
import { Container } from "./styled/Container.styled";
import {
  Accordiumarea,
  AccordiumTitlearea,
  AccordiumWrap,
  Wrap,
  Wrappedarea,
  FaqTitlearea,
  SearchWrap,
  AccordiumBox,
} from "./styled/Accordium.styled";
import Plus from "../agroImg/plus.png";
import Minus from "../agroImg/minus.png";
import RightImg from "../agroImg/Faq.png";
import Search from "../agroImg/search.png";

const Accordium = () => {
  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <ServiceCon>
      <Container>
        <Accordiumarea>
          <AccordiumTitlearea>
            <FaqTitlearea>
              <div className="leftside">
                <h2>FAQS</h2>
                <p>Frequently Asked Questions</p>
              </div>
              <div className="rightside">
                <img src={RightImg} alt="/" />
              </div>
            </FaqTitlearea>
            <p className="ques">Have questions? We’re here to help</p>
            <SearchWrap>
              <img src={Search} alt="/" />
              <input type="text" placeholder="Search" />
            </SearchWrap>
          </AccordiumTitlearea>
          <AccordiumBox>
            {AccordiumData.map((item, index) => (
              <AccordiumWrap>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h2>{item.question}</h2>
                  <span>
                    {clicked === index ? (
                      <img src={Minus} alt="" srcset="" />
                    ) : (
                      <img src={Plus} alt="" srcset="" />
                    )}
                  </span>
                </Wrap>
                {clicked === index ? (
                  <Wrappedarea>{item.answer}</Wrappedarea>
                ) : null}
              </AccordiumWrap>
            ))}
          </AccordiumBox>
        </Accordiumarea>
      </Container>
    </ServiceCon>
  );
};

export default Accordium;
