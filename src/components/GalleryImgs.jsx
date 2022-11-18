import React, { useState } from "react";
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
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoChevronBackSharp } from "react-icons/io5";
import { AiFillBackward, AiFillForward } from "react-icons/ai";
import ReactPaginate from "react-paginate";

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

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;

  const currentData = GalleryW.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(GalleryW.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % GalleryW.length;
    setItemOffset(newOffset);
  };

  return (
    <ServiceCon>
      <Container>
        <ServiceArea>
          <TitleServe>
            <h2> Gallery</h2>
          </TitleServe>
          <ChooseCardContainer>
            {currentData.map((item, index) => (
              <img src={item} alt="" key={index} />
            ))}
          </ChooseCardContainer>
        </ServiceArea>
        <NextBtns>
          <ReactPaginate
            breakLabel="..."
            nextLabel={<AiFillForward className="icons next" />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={<AiFillBackward className="icons back" />}
            renderOnZeroPageCount={null}
            containerClassName="Pagination"
            pageLinkClassName="numbers"
          />
        </NextBtns>
      </Container>
    </ServiceCon>
  );
};

export default GalleryImgs;
