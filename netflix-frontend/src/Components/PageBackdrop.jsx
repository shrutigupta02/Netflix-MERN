import { useNavigate } from "react-router-dom";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function PageBackdrop({image, logo, item}){
    const navigate = useNavigate();

    return(
        <div className="bg-inherit relative">
        <img src={image} className="object-cover h-full w-full" />
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div id="movieInfo" className="absolute left-0 bottom-20 p-6 text-white flex flex-col space-y-4 ">
            <div>
                <img src={logo} className="h-72 max-w-1/2 object-contain" />
            </div>
            <div className="flex p-2">
                <button onClick={() => navigate("/player")} 
                className="flex items-center ml-4 bg-white text-black px-8 py-2 rounded-md hover:bg-gray-300 transition duration-300">
                    <PlayArrowIcon className="mr-2"/> <span>Play</span>
                </button>
                <button 
                onClick={() => navigate("/details", { state: { item } })}
                className="flex items-center ml-4 bg-gray-700 text-white px-8 py-2 rounded-md hover:bg-gray-600 transition duration-300">
                    <InfoOutlinedIcon className="mr-2" /> <span>More info</span>
                </button>
            </div>
        </div>
    </div>
    )
}