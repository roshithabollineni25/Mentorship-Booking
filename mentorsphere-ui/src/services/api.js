import axios from "axios";

const API = axios.create({
  baseURL: "https://mnetorshpere.onrender.com"
});

export default API;