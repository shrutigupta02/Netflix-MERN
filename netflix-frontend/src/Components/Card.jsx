import { useNavigate } from "react-router-dom";
import image from item.image;

export default function Card({ item }) {
    const navigate = useNavigate();

    return (
        <div 
        onClick={() => navigate("/details", { state: { item } })}
        className="min-w-80 ml-2 p-5 rounded overflow-hidden shadow-lg bg-inherit transition-transform hover:shadow-red-800/80 hover:scale-105">
            <img className="m-2 max-h-96 min-h-96 w-64 object-cover" src={image} alt={item.name} />
            <div className="p-6">
                <h1 className="font-bold text-md mb-2">{item.name}</h1>
            </div>
        </div>
    );
}
