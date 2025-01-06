import React from "react";
import { useNavigate } from "react-router-dom"; 

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate(); // Hook de navegação
  
  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-[180px] p-4 px-3 rounded cursor-pointer transition-all duration-200 hover:bg-gray-800"
    >
      <img className="rounded" src={image} alt={name} />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default AlbumItem;
