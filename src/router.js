import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/courses",
      name: "courses",
      component: () => import("./components/Courses")
    },
    // {
    //   path: "/courses/:CourseNumber",
    //   name: "course-details",
    //   component: () => import("./components/Course")
    // },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddCourse")
    },
    {
      path: "/update",
      name: "update",
      component: () => import("./components/UpdateCourse")
    },
    {
      path: "/delete",
      name: "delete",
      component: () => import("./components/DeleteCourse")
    }
  ]
});