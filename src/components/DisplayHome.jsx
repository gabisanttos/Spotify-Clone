import React from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem"; 
import { songsData } from "../assets/assets";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <>
    <Navbar/>
    <div className="mb-4">
      <h1 className="my-5 text-2xl font-extrabold text-white">Paradas em destaques</h1>
      <div className="flex overflow-x-auto custom-scrollbar">
      {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
      </div>
    </div>
    <div className="mb-4">
      <h1 className="my-5 text-2xl font-extrabold text-white">Sucessos mais ouvidos</h1>
      <div className="flex overflow-x-auto custom-scrollbar">
      {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
      </div>
    </div>
    </>
  );
};

export default DisplayHome