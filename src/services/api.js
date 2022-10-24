import axios from "axios";

const privateKey = "1d98507e";

const api = axios.create({
  baseURL: "https://www.omdbapi.com/?s=star%20wars&apikey=1d98507e",
});

export default api;
