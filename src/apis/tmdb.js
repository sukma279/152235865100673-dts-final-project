import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_KEY;
const baseUrl = 'https://api.giphy.com/v1/';

const tmdb = axios.create({
  baseURL: baseUrl, 
  params: {
    api_key: API_KEY,
    limit: 25,
  },
});

export default tmdb;
