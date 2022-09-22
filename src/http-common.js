import axios from "axios";
export default axios.create({
  baseURL: "http://project2.eaglesoftwareteam.com/",
  headers: {
    "Content-type": "application/json"
  }
});