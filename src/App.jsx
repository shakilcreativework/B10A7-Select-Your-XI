import { Suspense, use, useState } from "react";
import "./App.css";
import { ToastContainer } from 'react-toastify';
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

// players data load
const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

const playersPromise = fetchPlayers();

function App() {
  const playersData = use(playersPromise);
  // console.log(playersData);
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(6000000000);
  // const [allPlayers, setAllPlayers] = useState([]);
  const [choosePlayers, setChoosePlayers] = useState([]);
  // console.log(choosePlayers, choosePlayers.length)
  // console.log(allPlayers);

  // handle delete player
  const removePlayer = (p) => {
    console.log(p);
    const filterPlayerData = choosePlayers.filter(ply => ply.id !== p.id);
    setChoosePlayers(filterPlayerData);
    setAvailableBalance(availableBalance + Number(p?.price.replace(/[$,]/g, "")));
  };

  return (
    <>
      {/* header */}
      <header className="shadow-sm">
        <div className="max-w-300 mx-auto px-4 lg:px-0">
          <Navbar availableBalance={availableBalance} />
        </div>
      </header>

      

      {/* main */}
      <main className="max-w-300 mx-auto px-4 lg:px-0 mt-4">
        {/* hero section */}
        <div className="bg-black flex flex-col justify-center items-center gap-3 px-4 py-10 rounded-2xl mt-10 mb-20">
          <img src="https://i.ibb.co.com/FLn9PVxQ/banner-main.png" alt="" />
          <h1 className="font-bold text-[30px] md:text-[32px] lg:text-[40px] text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <p className="text-white/70 text-base md:text-2xl mb-2">Beyond Boundaries Beyond Limits</p>
          <div className="border border-[#E7FE29] size-fit p-2 rounded-xl">
            <button className={`py-2 px-5 rounded-xl transition-all bg-[#E7FE29] font-semibold `}>Claim Free Credit</button>
          </div>
        </div>
        {/* available and selected */}
        <div className="flex flex-col md:flex-row gap-5 justify-between items-center my-7">
          <h2 className="text-xl md:text-2xl lg:text-[28px] font-bold">
            {
              toggle ? 
              'Available Players'
              :
              `Selected Player (${choosePlayers.length}/${playersData.length})`
            }
          </h2>
          <div className="border border-gray-200 rounded-2xl">
            <button onClick={() => setToggle(true)} className={`py-2 px-5 rounded-l-2xl transition-all text-[#131313] font-semibold ${toggle ? 'bg-[#E7FE29]' : 'text-gray-400 bg-white'}`}>
              Available
            </button>
            <button onClick={() => setToggle(false)} className={`py-2 px-5 rounded-r-2xl transition-all ${toggle ? 'text-gray-400 bg-white' : 'bg-[#E7FE29]'} font-semibold `}>
              Selected ({choosePlayers.length})
            </button>
          </div>
        </div>
        {/* cards */}
        {toggle ? (
          <Suspense
            fallback={<span className="loading loading-dots loading-xl"></span>}
          >
            <AvailablePlayers playersData={playersData} setAvailableBalance={setAvailableBalance} availableBalance={availableBalance} choosePlayers={choosePlayers} setChoosePlayers={setChoosePlayers} />
          </Suspense>
        ) : (
          <SelectedPlayers choosePlayers={choosePlayers} removePlayer={removePlayer} />
        )}
      </main>

      <ToastContainer />
    </>
  );
}

export default App;
