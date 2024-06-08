import CardSlider from "../Components/CardSlider";
import Navbar from "../Components/Navbar";
import PageBackdrop from "../Components/PageBackdrop";
import Slider from "../Components/Slider";
import { trendingShows, sitcoms, thrillerShows } from "../Utils/showDetails";

export default function TVShows(){
    return(
        <div className="bg-black text-white">
            <Navbar/>
            <PageBackdrop image="src/assets/tv-poster.webp" logo="src/assets/tv-logo.png"/>
            <Slider trendingShows={trendingShows}/>
            <div>
                <CardSlider title="Dive in: Sitcoms" arr={sitcoms}/>
                <CardSlider title="Get an adrenaline boost with thrillers" arr={thrillerShows}/>
            </div>
        </div>
    )
}