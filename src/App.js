import Header from "@/components/Header.js";
import Intro from "@/components/Intro.js";
import MovieChart from "@/components/MovieChart.js";
import Upcoming from "@/components/Upcoming.js";
import Theater from "@/components/Theater.js";
import Store from "@/components/Store.js";
import Event from "@/components/Event.js";
import Footer from "@/components/Footer.js";
import "@/App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Intro />
      <MovieChart />
      <Upcoming />
      <Theater />
      <Event />
      <Store />
      <Footer />
    </div>
  );
}

export default App;
