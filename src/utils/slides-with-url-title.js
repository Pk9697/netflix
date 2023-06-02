const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const slides = () => [
  {
    url: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    title: 'Trending',
  },
  {
    url: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    title: 'Netflix Originals',
  },
  {
    url: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    title: 'Top Rated',
  },
  {
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    title: 'Action Movies',
  },
  {
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    title: 'Comedy Movies',
  },
  {
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    title: 'Horror Movies',
  },
  {
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    title: 'Romance Movies',
  },
  {
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
    title: 'Documentaries',
  },
]

export default slides
