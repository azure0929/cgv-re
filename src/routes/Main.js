import Header from "@/common/Header.js";
import Intro from "@/components/Intro.js";
import MovieChart from "@/components/MovieChart.js";
import Upcoming from "@/components/Upcoming.js";
import Theater from "@/components/Theater.js";
import Event from "@/components/Event.js";
import Store from "@/components/Store.js";

function Main() {
  return (
    <div>
      <Header />
      <Intro />
      <MovieChart />
      <Upcoming />
      <Theater />
      <Event />
      <Store />
    </div>
  );
}

export default Main;
