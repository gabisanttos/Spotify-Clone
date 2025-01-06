import React, { useContext, useRef } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {

  const {audioRef, track} = useContext(PlayerContext);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="flex flex-grow">
        <Sidebar />
        <Display />
        <div className="flex-grow"></div>
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;