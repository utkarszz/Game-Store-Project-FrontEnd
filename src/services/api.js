import axios from "axios";

const API = axios.create({
  baseURL: "https://game-store-project-backend-1.onrender.com/api"
});

// Add token to requests if it exists
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Games API
export const fetchGames = () =>
  API.get("/games");

export const fetchGameById = (id) =>
  API.get(`/games/${id}`);

export const addGame = (gameData) =>
  API.post("/games", gameData);

export const updateGame = (id, gameData) =>
  API.put(`/games/${id}`, gameData);

export const deleteGame = (id) =>
  API.delete(`/games/${id}`);

// Auth API
export const registerUser = (userData) =>
  API.post("/auth/register", userData);

export const loginUser = (credentials) =>
  API.post("/auth/login", credentials);

export default API;