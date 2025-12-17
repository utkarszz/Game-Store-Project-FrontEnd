import axios from "axios";

const API = axios.create({
  baseURL:"https://game-store-project-backend-1.onrender.com/api"
});

export const fetchGames = ()=>
  API.get("/games");
export const fetchGameById = (id) => 
  API.get(`/games/${id}`)