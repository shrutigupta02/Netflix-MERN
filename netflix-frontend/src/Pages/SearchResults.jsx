import { useLocation } from "react-router-dom";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function SearchResults() {
    const location = useLocation();
    const { results } = location.state || { results: [] };


    return(
        <div className="bg-black text-slate-100">
            <Navbar />
            <h3 className="m-4 font-semibold text-xl">Search Results:</h3>
            {results.length === 0 ? (
                <div className="bg-black h-screen w-screen p-4 text-center">
                    <h3 className="m-4 font-semibold text-lg">No results found</h3>
                </div>
            ) : (
                <div className="flex space-x-4 p-4 h-screen w-screen">
                    {results.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            )}
            <Footer/>
        </div>
    );
}