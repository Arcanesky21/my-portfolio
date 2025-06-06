"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

type WorkSliderBtnsProps = {
  containerStyles?: string;
  btnStyles?: string;
  iconsStyles?: string;
};

const WorkSliderBtns = ({
  containerStyles,
  btnStyles,
  iconsStyles,
}: WorkSliderBtnsProps) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button title="prev" className={btnStyles}>
        <PiCaretLeftBold
          className={iconsStyles}
          onClick={() => swiper.slidePrev()}
        />
      </button>
      <button title="next" className={btnStyles}>
        <PiCaretRightBold
          className={iconsStyles}
          onClick={() => swiper.slideNext()}
        />
      </button>
    </div>
  );
};
export default WorkSliderBtns;
