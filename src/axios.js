import axios from "axios";

// base url to make requests to the movie DB
const instance = axios.create({
  baseURL: "https://smallmern.herokuapp.com/",
});

export default instance;
