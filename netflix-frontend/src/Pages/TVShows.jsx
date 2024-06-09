import CardSlider from "../Components/CardSlider";
import Navbar from "../Components/Navbar";
import PageBackdrop from "../Components/PageBackdrop";
import Slider from "../Components/Slider";
import { trendingShows, sitcoms, thrillerShows } from "../Utils/showDetails";
import Footer from "../Components/Footer";
import img from "../assets/tv-poster.webp"
import infoImage from "../assets/trending-shows/friends.webp"
import logoImage from "../assets/tv-logo.png"

export default function TVShows(){
    const item = {
        id: 110,
        name: "F.R.I.E.N.D.S",
        description: "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
        genres: ["Comedy", "Romance"],
        image: infoImage
    };

    return(
        <div className="bg-black text-white">
            <Navbar/>
            <PageBackdrop image={img} logo={logoImage} item={item}/>
            <Slider trendingShows={trendingShows}/>
            <div>
                <CardSlider title="Dive in: Sitcoms" arr={sitcoms}/>
                <CardSlider title="Get an adrenaline boost with thrillers" arr={thrillerShows}/>
            </div>
            <Footer/>
        </div>
    )
}