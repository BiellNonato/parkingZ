import axios from "axios";

const api = axios.create({
  baseURL: "https://68ebe9a476b3362414cf0a7f.mockapi.io/estacionamento/", 
});

export default api;


