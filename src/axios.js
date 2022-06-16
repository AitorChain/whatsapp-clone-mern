import axios from "axios";

const instance = axios.create({
  baseURL: "https://whats-back.herokuapp.com/",
});

export default instance;
