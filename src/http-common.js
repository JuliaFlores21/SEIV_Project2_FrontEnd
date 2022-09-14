import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:3004/course-t4/",
  headers: {
    "Content-type": "application/json"
  }
});