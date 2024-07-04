import { useSwiper } from "swiper/react";
import prevbtn from "@/assets/prevbtn.png";

function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper?.slidePrev()}>
      <img src={prevbtn} alt="prevbtn" />
    </button>
  );
}

export default SlidePrevButton;
