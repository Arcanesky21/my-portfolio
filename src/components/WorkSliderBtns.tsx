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
      <button
        type="button"
        aria-label="Previous project"
        title="Previous project"
        className={btnStyles}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button
        type="button"
        aria-label="Next project"
        title="Next project"
        className={btnStyles}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};
export default WorkSliderBtns;
