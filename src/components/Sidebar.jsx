import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

  const navigate = useNavigate();

  return (
    <div className="w-[25%] h-full p-2 flex flex-col gap-2 text-white bg-black hidden lg:flex">

      {/* Primeira Seção - Navegação Principal */}
      <div className="bg-[#121212] rounded-lg flex flex-col gap-2">
        {/* Início */}
        <div onClick={()=>navigate("/")} className="flex items-center gap-4 p-3 rounded-md hover:bg-[#282828] cursor-pointer transition duration-200">
          <img className="w-6 h-6" src={assets.home_icon} alt="Home Icon" />
          <p className="font-semibold text-gray-300 hover:text-white">Início</p>
        </div>

        {/* Procurar */}
        <div className="flex items-center gap-4 p-3 rounded-md hover:bg-[#282828] cursor-pointer transition duration-200">
          <img className="w-6 h-6" src={assets.search_icon} alt="Search Icon" />
          <p className="font-semibold text-gray-300 hover:text-white">Procurar</p>
        </div>
      </div>

      {/* Segunda Seção - Biblioteca */}
      <div className="bg-[#121212] flex-grow rounded-lg overflow-y-auto">
        {/* Cabeçalho */}
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="Library Icon" />
            <p className="font-semibold">Sua Biblioteca</p>
          </div>

          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="Arrow Icon" />
            <img className="w-5" src={assets.plus_icon} alt="Plus Icon" />
          </div>
        </div>

        {/* Playlist */}
        <div className="p-4 bg-[#242424] m-2 rounded-lg font-semibold flex flex-col items-start gap-2">
          <h1 className="text-lg">Crie sua primeira playlist</h1>
          <p className="font-light text-sm">É fácil, vamos te ajudar</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Criar playlist
          </button>
        </div>

        {/* Podcast */}
        <div className="p-4 bg-[#242424] m-2 rounded-lg font-semibold flex flex-col items-start gap-2">
          <h1 className="text-lg">Que tal seguir um podcast novo?</h1>
          <p className="font-light text-sm">Avisaremos a você sobre novos episódios</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Explore podcast
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
