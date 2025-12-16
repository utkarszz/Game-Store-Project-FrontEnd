import axios from "axios";

const API = axios.create({
  baseURL:"http://localhost:5000/api"
});

export const fetchGames = ()=>
  API.get("/games");
export const fetchGameById = (id) => 
  API.get(`/games/${id}`)