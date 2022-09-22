import axios from "axios";
export default axios.create({
  baseURL: "http://project2.eaglesoftwareteam.com/course-t4/",
  headers: {
    "Content-type": "application/json"
  }
});
