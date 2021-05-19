import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'a5553a8897951777476f870644c7e394',
    language: 'es-ES'
  }
});

export default movieDB;