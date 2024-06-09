import { trendingMovies, comedyMovies, romComMovies, educationMovies } from "./movieDetails";
import { trendingShows, sitcoms, thrillerShows } from "./showDetails";

export const allData = [
    ...trendingMovies,
    ...trendingShows, 
    ...comedyMovies, 
    ...romComMovies, 
    ...educationMovies, 
    ...sitcoms, 
    ...thrillerShows
];
