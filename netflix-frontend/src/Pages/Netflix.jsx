import { useState } from "react";
import Navbar from "../Components/Navbar";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useNavigate } from "react-router-dom";

export default function Netflix(){
    const navigate = useNavigate();

    return(
        <div className="bg-black h-screen w-screen">
    <Navbar />
    <div className="bg-inherit relative">
        <img src="src/assets/home.jpg" className="object-cover h-full w-full" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div id="movieInfo" className="absolute left-0 bottom-20 p-6 text-white flex flex-col space-y-4 ">
            <div className="h-3/4">
                <img src="src/assets/true.webp" className="h-full object-contain" />
            </div>
            <div className="flex p-2">
                <button onClick={() => navigate("/player")} 
                className="flex items-center ml-4 bg-white text-black px-8 py-2 rounded-md hover:bg-gray-300 transition duration-300">
                    <PlayArrowIcon /> <span>Play</span>
                </button>
                <button className="flex items-center ml-4 bg-gray-700 text-white px-8 py-2 rounded-md hover:bg-gray-600 transition duration-300">
                    <InfoOutlinedIcon /> <span>More info</span>
                </button>
            </div>
        </div>
    </div>
</div>


    );
}