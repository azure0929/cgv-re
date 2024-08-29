import { useSwiper } from "swiper/react";
import nextbtn from "@/assets/nextbtn.png";

function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper?.slideNext()}>
      <img src={nextbtn} alt="nextbtn" loading="lazy" />
    </button>
  );
}

export default SlideNextButton;
