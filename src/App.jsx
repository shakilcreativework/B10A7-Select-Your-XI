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
        <div className="max-w-300 mx-auto">
          <Navbar />
        </div>
      </header>

      {/* main */}
      <main className="max-w-300 mx-auto mt-4">
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <AvailablePlayers playersPromise={playersPromise} />
        </Suspense>
        {/* <SelectedPlayers /> */}
      </main>
    </>
  );
}

export default App;
