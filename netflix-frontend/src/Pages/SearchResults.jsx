import { useLocation } from "react-router-dom";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";

export default function SearchResults() {
    const location = useLocation();
    const { results } = location.state || { results: [] };


    return(
        <div className="bg-black text-slate-100">
            <Navbar/>
            <h3 className="m-4 text-white font-semibold text-xl">Search Results:</h3>
            <div className=" flex space-x-4 p-4" onClick={()=> console.log(results[0])}>
                {results.map((item)=>(
                <Card key={item.id} item={item}/>
                ))}
            </div>
        </div>
    );
}