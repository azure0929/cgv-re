import { Routes, Route } from "react-router-dom";
import Main from "@/routes/Main.js";
import Making from "@/routes/Making.js";
import Footer from "@/common/Footer.js";
import ScrollToTop from "./components/ScrollToTop";
import "@/App.scss";

function App() {
  return (
    <div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/making" element={<Making />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </div>
    </div>
  );
}

export default App;
