import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams(); // Obtém o ID da URL
  const albumData = albumsData[id]; // Pega os dados do álbum pelo ID
  const {playWithId} = useContext(PlayerContext)

  return (
    <>
      <Navbar />
      <div className="from-gray-900 to-black rounded min-h-screen text-white p-8 mt-4">
        <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
          <img
            className="w-48 md:w-60 rounded shadow-lg"
            src={albumData.image}
            alt="Imagem do Álbum"
          />

          {/* Informações do Álbum */}
          <div className="flex flex-col">
            <p className="uppercase text-sm font-light text-gray-400">Playlist</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-2">{albumData.name}</h2>
            <h4 className="text-gray-300 mb-4">{albumData.desc}</h4>

            {/* Informações Adicionais */}
            <p className="flex items-center gap-2 text-gray-400">
              <img
                className="inline-block w-5"
                src={assets.spotify_logo}
                alt="Logo Spotify"
              />
              <b className="text-white">Spotify</b>
              • 1,323,154 curtidas • <b>50 músicas</b>
            </p>
          </div>
        </div>

        {/* Cabeçalho das músicas */}
        <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
          <p>
            <b className="mr-4">#</b>Título
          </p>
          <p>Álbum</p>
          <p className="hidden sm:block">Data Adicionada</p>
          <img className="m-auto w-4" src={assets.clock_icon} alt="Ícone Relógio" />
        </div>
        <hr />

        {/* Lista de Músicas */}
        {songsData.map((item, index) => (
          <div onClick={() => playWithId(item.id)}
            key={index}
            className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
          >
            <p className="text-white">
              <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
              <img className="inline w-10 mr-5" src={item.image} alt="Imagem da Música" />
              {item.name}
            </p>
            <p className="text-[15px]">{albumData.name}</p>
            <p className="text-[15px] hidden sm:block">5 dias ago</p>
            <p className="text-[15px] text-center">{item.duration}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayAlbum;