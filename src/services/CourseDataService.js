import http from "../http-common";
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
    return http.delete(`/courses/${CourseNumber}`);
  }
  deleteAll() {
    return http.delete(`/courses`);
  }
  findByCourseNumber(CourseNumber) {
    return http.get(`/courses?CourseNumber=${CourseNumber}`);
  }
}
export default new CourseDataService();