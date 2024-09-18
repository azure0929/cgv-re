import theater01 from "@/assets/theater01.webp";
import theater02 from "@/assets/theater02.webp";
import theater03 from "@/assets/theater03.webp";
import theater04 from "@/assets/theater04.webp";
import theater05 from "@/assets/theater05.webp";
import theater06 from "@/assets/theater06.webp";
import theater07 from "@/assets/theater07.webp";
import theater08 from "@/assets/theater08.webp";
import theater09 from "@/assets/theater09.webp";
import theater10 from "@/assets/theater10.webp";
import theater11 from "@/assets/theater11.webp";
import "@/App.scss";
import "@/scss/Theater.scss";

function Theater() {
  return (
    <div>
      {/* section : theater */}
      <section className="theater">
        <div className="inner">
          <div className="list">
            <div className="list-group">
              <img src={theater01} alt="theater01" loading="lazy" />
              <img src={theater02} alt="theater02" loading="lazy" />
              <img src={theater03} alt="theater03" loading="lazy" />
              <img src={theater04} alt="theater04" loading="lazy" />
              <img src={theater05} alt="theater05" loading="lazy" />
            </div>
            <div aria-hidden="true" className="list-group">
              <img src={theater01} alt="theater01" loading="lazy" />
              <img src={theater02} alt="theater02" loading="lazy" />
              <img src={theater03} alt="theater03" loading="lazy" />
              <img src={theater04} alt="theater04" loading="lazy" />
              <img src={theater05} alt="theater05" loading="lazy" />
            </div>
          </div>
          <div className="list list-reverse">
            <div className="list-group">
              <img src={theater06} alt="theater06" loading="lazy" />
              <img src={theater07} alt="theater07" loading="lazy" />
              <img src={theater08} alt="theater08" loading="lazy" />
              <img src={theater09} alt="theater09" loading="lazy" />
              <img src={theater10} alt="theater10" loading="lazy" />
              <img src={theater11} alt="theater11" loading="lazy" />
            </div>
            <div aria-hidden="true" className="list-group">
              <img src={theater06} alt="theater06" loading="lazy" />
              <img src={theater07} alt="theater07" loading="lazy" />
              <img src={theater08} alt="theater08" loading="lazy" />
              <img src={theater09} alt="theater09" loading="lazy" />
              <img src={theater10} alt="theater10" loading="lazy" />
              <img src={theater11} alt="theater11" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Theater;
