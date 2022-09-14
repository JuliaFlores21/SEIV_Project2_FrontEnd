import http from "../http-common";
class CourseDataService {
  getAll() {
    return http.get("/");
  }
  get(CourseNumber) {
    return http.get(`/courses/${CourseNumber}`);
  }
  create(data) {
    return http.post("/courses", data);
  }
  update(CourseNumber, data) {
    return http.put(`/courses/${CourseNumber}`, data);
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