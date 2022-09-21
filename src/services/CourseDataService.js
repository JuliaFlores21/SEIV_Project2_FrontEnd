import http from "../http-common";
import axios from 'axios';

class CourseDataService {
  getAll() {
    return http.get("/");
  }
  get(CourseNumber) {
    return http.get(`/${CourseNumber}`);
  }
  create(data) {
    return http.post("/", data);
  }
  update(CourseNumber, data) {
    return http.put(`/${CourseNumber}`, data);
  }
  delete(CourseNumber) {
    return http.delete(`/${CourseNumber}`);
  }
  deleteAll() {
    return http.delete(`/courses`);
  }
  findByCourseNumber(CourseNumber) {
    return http.get(`/courses?CourseNumber=${CourseNumber}`);
  }
  async getEventSingle(CourseNumber) {
    let res = await axios.get(`/${CourseNumber}`);
    return res.data;
  }
}
export default new CourseDataService();