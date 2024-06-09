import CardSlider from "../Components/CardSlider";
import Navbar from "../Components/Navbar";
import PageBackdrop from "../Components/PageBackdrop";
import Slider from "../Components/Slider";
import Footer from "../Components/Footer";
import img from "../assets/movies-poster.webp";
import logoImage from "../assets/movies-logo.png";
import infoImage from "../assets/trending-movies/spiderman.jpg";
import { comedyMovies, educationMovies, romComMovies, trendingMovies } from "../Utils/movieDetails";

export default function Movies(){
    const item = {
        id: 1,
        name: "Spider-Man: No Way Home",
        description: "Peter Parker navigates his way through his latest adventures as Spider-Man.",
        genres: ["Action", "Adventure", "Fantasy"],
        image: infoImage
    };
 
    return(
        <div className="bg-black text-slate-100">
            <Navbar/>
            <PageBackdrop image={img} logo={logoImage} item={item}/>
            <Slider trendingMovies={trendingMovies}/>
            <div>
                <CardSlider title="Get some laughs with our beloved comedies" arr={comedyMovies}/>
                <CardSlider title="Cheeky smiles and Rom-Coms" arr={romComMovies}/>
                <CardSlider title="Eye-openers and Educational" arr={educationMovies}/>
            </div>
            <Footer/>
        </div>
    )
}