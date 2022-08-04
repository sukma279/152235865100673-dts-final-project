import axios from 'axios';

const API_KEY = 'b2CpQTaTPKLLaye0NDapYJK3KUuPYZNP';
const baseUrl = 'https://api.giphy.com/v1/';

const tmdb = axios.create({
  baseURL: baseUrl, 
  params: {
    api_key: API_KEY,
    limit: 25,
  },
});

export default tmdb;
