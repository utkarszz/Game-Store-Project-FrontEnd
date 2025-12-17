import axios from "axios";

const API = axios.create({
  baseURL:"hhttps://game-store-project-backend-1.onrender.com/api/games"
});

export const fetchGames = ()=>
  API.get("/games");
export const fetchGameById = (id) => 
  API.get(`/games/${id}`)