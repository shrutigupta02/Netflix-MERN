import { trendingShows } from "../Utils/showDetails"
import CardSlider from "./CardSlider"

export default function Slider({trendingMovies, trendingShows}){
    return(
        <div>
            {trendingShows? 
                <CardSlider title="Trending Shows" arr={trendingShows}/> :""
            }
            {trendingMovies? 
                <CardSlider title="Trending Movies" arr={trendingMovies}/> :""
            }
        </div>
    )
}