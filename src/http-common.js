import axios from "axios";
var baseURL = "";
if (process.env.NODE_ENV === "dev") {
  baseURL = "http://localhost:3002/course-t4/";
} else {
  baseURL = "http://project2.eaglesoftwareteam.com/course-t4/";
}

export default axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Requested-With":"XMLHttpRequest",
    "Access-Control-Allow-Origin":"*",
    crossDomain: true
  }
});
