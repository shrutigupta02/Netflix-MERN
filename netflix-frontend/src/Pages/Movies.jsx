import CardSlider from "../Components/CardSlider";
import Navbar from "../Components/Navbar";
import PageBackdrop from "../Components/PageBackdrop";
import Slider from "../Components/Slider";
import { comedyMovies, educationMovies, romComMovies, trendingMovies } from "../Utils/movieDetails";

export default function Movies(){
    return(
        <div className="bg-black text-white">
            <Navbar/>
            <PageBackdrop image="src/assets/movies-poster.webp" logo="src/assets/movies-logo.png"/>
            <Slider trendingMovies={trendingMovies}/>
            <div>
                <CardSlider title="Get some laughs with our beloved comedies" arr={comedyMovies}/>
                <CardSlider title="Cheeky smiles and Rom-Coms" arr={romComMovies}/>
                <CardSlider title="Eye-openers and Educational" arr={educationMovies}/>
            </div>
        </div>
    )
}