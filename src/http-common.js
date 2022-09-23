import axios from "axios";
var baseURL = "";
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost/course-t4/";
} else {
  baseURL = "/course-t4/";
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
