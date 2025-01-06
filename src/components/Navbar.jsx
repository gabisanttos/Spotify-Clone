import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img onClick={()=>navigate(-1)} className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left} alt="Seta para esquerda"
          />
          <img onClick={()=>navigate(1)} className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right} alt="Seta para direita"/>
        </div>
        <div className="flex items-center gap-4">
        <p className="bg-white text-black text-sm px-6 py-2 rounded-full hidden md:block 
        hover:bg-gray-200 cursor-pointer">Explorar Premium</p>
        <p className="bg-black text-white text-sm px-6 py-2 rounded-full hidden md:block 
        hover:bg-gray-800 cursor-pointer">Instalar App</p>
        <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">M</p>
       </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">Tudo</p>
        <p className="bg-gray-500/30 text-white px-4 py-1 rounded-2xl hover:bg-gray-500/70 cursor-pointer">Música</p>
        <p className="bg-gray-500/30 text-white px-4 py-1 rounded-2xl hover:bg-gray-500/70  cursor-pointer">Podcasts</p>
     </div>
    </>
  );
};

export default Navbar;
