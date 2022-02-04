const API_KEY = process.env.API_KEY;

interface MoviesRequestParams {
  title: string;
  url: string;
}

// export interface MoviesRequestList {
//   fetchTrending: MoviesRequest;
//   fetchTopRated: MoviesRequest;
//   fetchActionMovies: MoviesRequest;
//   fetchComedyMovies: MoviesRequest;
//   fetchMorrorMovies: MoviesRequest;
//   fetchRomanceMovies: MoviesRequest;
//   fetchMystery: MoviesRequest;
//   fetchSciFi: MoviesRequest;
//   fetchWestern: MoviesRequest;
//   fetchAnimation: MoviesRequest;
//   fetchTV: MoviesRequest;
// }

type MoviesRequest = {
  [key: string]: MoviesRequestParams
}

export const movies: MoviesRequest = {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchMorrorMovies: {
    title: "Morror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchTV: {
    title: "TV Movie",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
};
