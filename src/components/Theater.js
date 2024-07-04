import theater01 from "@/assets/theater01.jpg";
import theater02 from "@/assets/theater02.jpg";
import theater03 from "@/assets/theater03.jpg";
import theater04 from "@/assets/theater04.jpg";
import theater05 from "@/assets/theater05.jpg";
import theater06 from "@/assets/theater06.jpg";
import theater07 from "@/assets/theater07.jpg";
import theater08 from "@/assets/theater08.jpg";
import theater09 from "@/assets/theater09.jpg";
import theater10 from "@/assets/theater10.jpg";
import theater11 from "@/assets/theater11.jpg";
import "@/App.css";
import "@/css/Theater.css";

function Theater() {
  return (
    <div>
      {/* section : theater */}
      <section className="theater">
        <div className="inner">
          <div className="list">
            <div className="list-group">
              <img src={theater01} alt="theater01" />
              <img src={theater02} alt="theater02" />
              <img src={theater03} alt="theater03" />
              <img src={theater04} alt="theater04" />
              <img src={theater05} alt="theater05" />
            </div>
            <div aria-hidden="true" className="list-group">
              <img src={theater01} alt="theater01" />
              <img src={theater02} alt="theater02" />
              <img src={theater03} alt="theater03" />
              <img src={theater04} alt="theater04" />
              <img src={theater05} alt="theater05" />
            </div>
          </div>
          <div className="list list-reverse">
            <div className="list-group">
              <img src={theater06} alt="theater06" />
              <img src={theater07} alt="theater07" />
              <img src={theater08} alt="theater08" />
              <img src={theater09} alt="theater09" />
              <img src={theater10} alt="theater10" />
              <img src={theater11} alt="theater11" />
            </div>
            <div aria-hidden="true" className="list-group">
              <img src={theater06} alt="theater06" />
              <img src={theater07} alt="theater07" />
              <img src={theater08} alt="theater08" />
              <img src={theater09} alt="theater09" />
              <img src={theater10} alt="theater10" />
              <img src={theater11} alt="theater11" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Theater;
