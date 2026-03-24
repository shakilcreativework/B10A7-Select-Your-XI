import { Suspense } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

// players data load
const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayers();

  return (
    <>
      {/* header */}
      <header className="shadow-sm">
        <div className="max-w-300 mx-auto px-4 lg:px-0">
          <Navbar />
        </div>
      </header>

      {/* main */}
      <main className="max-w-300 mx-auto px-4 lg:px-0 mt-4">
        {/* available and selected */}
        <div className="flex flex-col md:flex-row gap-5 justify-between items-center my-7">
          <h2 className="text-xl md:text-2xl lg:text-[28px] font-bold">Available Players</h2>
          <div className="border border-gray-200 rounded-2xl">
            <button className="py-2 px-5 rounded-l-2xl text-[#131313] font-semibold bg-[#E7FE29]">Available</button>
            <button className="py-2 px-5 rounded-r-2xl text-gray-400 font-semibold ">Selected (0)</button>
          </div>
        </div>

        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <AvailablePlayers playersPromise={playersPromise} />
        </Suspense>
        <SelectedPlayers />
      </main>
    </>
  );
}

export default App;
