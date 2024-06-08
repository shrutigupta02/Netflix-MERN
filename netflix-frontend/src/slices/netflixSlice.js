import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api_key, base_url } from "../Utils/constants";

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
  userLikedMovies: [],
  trendingMovies: [],
  trendingShows: [],
  moviesByGenre: {},
};

const trendingMovieTitles = [
  'The Shawshank Redemption',
  'The Godfather',
  'The Dark Knight',
  'Pulp Fiction',
  'Forrest Gump',
  'Inception',
  'Fight Club',
  'The Matrix',
  'Interstellar',
  'Parasite',
];

const trendingShowTitles = [
  'Stranger Things',
  'Breaking Bad',
  'Game of Thrones',
  'The Mandalorian',
  'The Crown',
  'The Witcher',
  'Money Heist',
  'The Queen\'s Gambit',
  'Bridgerton',
  'WandaVision',
];

const popularGenres = {
  action: [
    'Die Hard',
    'Mad Max: Fury Road',
    'The Avengers',
    'Gladiator',
    'John Wick',
    'The Dark Knight',
    'Inception',
    'The Matrix',
    'Terminator 2: Judgment Day',
    'Skyfall',
  ],
  comedy: [
    'Superbad',
    'Step Brothers',
    'The Big Lebowski',
    'Anchorman: The Legend of Ron Burgundy',
    'Groundhog Day',
    'Dumb and Dumber',
    'Tropic Thunder',
    'Borat',
    'Bridesmaids',
    'Ferris Bueller\'s Day Off',
  ],
  drama: [
    'The Shawshank Redemption',
    'Forrest Gump',
    'The Godfather',
    'Schindler\'s List',
    'The Green Mile',
    'Fight Club',
    'Good Will Hunting',
    'A Beautiful Mind',
    'The Pursuit of Happyness',
    'Titanic',
  ],
  sciFi: [
    'Blade Runner 2049',
    'Interstellar',
    'The Matrix',
    'Inception',
    'Star Wars: Episode IV - A New Hope',
    'The Terminator',
    'Alien',
    'E.T. the Extra-Terrestrial',
    'Back to the Future',
    '2001: A Space Odyssey',
  ],
  horror: [
    'The Exorcist',
    'Hereditary',
    'The Shining',
    'Get Out',
    'A Nightmare on Elm Street',
    'Halloween',
    'The Conjuring',
    'It',
    'The Ring',
    'Psycho',
  ],
};

// Helper function to fetch movie details by title
const fetchMovieDetails = async (title) => {
  const response = await fetch(`${base_url}?apikey=${api_key}&t=${encodeURIComponent(title)}`);
  const jsonResponse = await response.json();
  return {
    ID: jsonResponse.imdbID,
    title: jsonResponse.Title,
    movieGenre: jsonResponse.Genre,
    image: jsonResponse.Poster,
  };
};

// Thunk to fetch trending movies
export const fetchTrendingMovies = createAsyncThunk(
  "Netflix/fetchTrendingMovies",
  async () => {
    try {
      const responses = await Promise.all(trendingMovieTitles.map(title => fetchMovieDetails(title)));
      return responses;
    } catch (err) {
      console.log(err);
    }
  }
);

// Thunk to fetch movies by genre
export const fetchMoviesByGenre = createAsyncThunk(
  "Netflix/fetchMoviesByGenre",
  async (genre) => {
    try {
      const genreTitles = popularGenres[genre];
      const responses = await Promise.all(genreTitles.map(title => fetchMovieDetails(title)));
      return responses;
    } catch (err) {
      console.log(err);
    }
  }
);

export const netflixSlice = createSlice({
  name: "Netflix",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.trendingMovies = action.payload;
      })
      .addCase(fetchMoviesByGenre.fulfilled, (state, action) => {
        state.moviesByGenre[action.meta.arg] = action.payload;
      });
  },
});

export default netflixSlice.reducer;
