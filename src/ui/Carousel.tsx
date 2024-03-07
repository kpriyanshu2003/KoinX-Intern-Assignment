import React from "react";
import Carousel from "react-multi-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "react-multi-carousel/lib/styles.css";
import { CoinDataProps } from "@/@types/CoinData";
import Coin from "./Coin";

export function Carousell({ data }: { data: CoinDataProps[] }) {
  const arrowStyle =
    "md:block hidden cursor-pointer absolute shadow-md bg-white h-8 w-8 rounded-full p-2";
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className="md:px-8"
        containerClass="container"
        customLeftArrow={<FaChevronLeft className={`${arrowStyle} left-0`} />}
        customRightArrow={
          <FaChevronRight className={`${arrowStyle} right-0`} />
        }
        dotListClass=""
        draggable
        focusOnSelect={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 5,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 4,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {data.map((coin: CoinDataProps, index) => (
          <Coin key={index} coin={coin} />
        ))}
      </Carousel>
    </>
  );
}
