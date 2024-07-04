import { useSwiper } from "swiper/react";
import nextbtn from "@/assets/nextbtn.png";

function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper?.slideNext()}>
      <img src={nextbtn} alt="nextbtn" />
    </button>
  );
}

export default SlideNextButton;
