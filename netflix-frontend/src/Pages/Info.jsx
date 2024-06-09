import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

export default function Info(){
    const location = useLocation();
    const { item } = location.state;

    return(
        <div className="bg-black text-slate-200 h-screen w-screen">
            <Navbar/>
            <h1 className="font-semibold text-2xl m-2 ml-8">{item.name}</h1>
            <div className="flex m-4 p-2">
                <img className="m-2 max-h-96 min-h-96 w-64 object-cover" src={item.image} alt={item.name} />                
                <div className="flex flex-col m-2 p-2 text-lg">
                    <h2 className="font-bold text-xl mb-4">About:</h2>
                    <p>{item.description}</p>
                    <h2 className="font-bold text-lg mt-6">Genres:</h2>
                    <p className="mt-1 text-md">
                        {item.genres.slice(0, 2).join(', ')}
                    </p> 
                </div>
            </div>
            <Footer/>
        </div>
    )
}