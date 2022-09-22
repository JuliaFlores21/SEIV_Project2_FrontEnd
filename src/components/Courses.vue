<template>
    <div class="list row">
      <div class="col-md-8">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Search by Course Number"
            v-model="CourseNumber"/>
          <div class="input-group-append">
            
            <span style="padding-left:20px;">
            <button class="btn btn-secondary btn-lg" type="button"
              @click="searchCourseNumber" > Search </button>
            </span>

            <span style="padding-left:50px;">
            <a class="badge badge-warning" :href="'/add'">
              <button class="btn btn-primary btn-lg"> Add </button>
            </a>
            </span>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h4>Courses List</h4>
        <ul class="list-group">

          <!-- <div v-if="!searched"> 
          <li class="list-group-item" :class="{ active: index == currentIndex }" v-for="(course, index) in courses" :key="index" @click="setActiveCourse(course, index)">
            
            {{  course.Name}}
            <span style="float:right;">
              {{ course.CourseNumber}}
            </span>
            
          </li>
          </div>
           -->
          <li class="list-group-item" :class="{ active: index == currentIndex }" 
          v-for="(course, index) in displayCourses" :key="index" @click="setActiveCourse(course, index)">

            {{ course.Name}}
            <span style="float:right;">
              {{ course.CourseNumber}}
            </span>
            
          </li>

        </ul>
        <!-- <button class="m-3 btn btn-sm btn-danger" @click="removeAllCourses">
          Remove All
        </button> -->
      </div>
      <div class="col-md-6">
        <div v-if="currentCourse">
          <h4>Course Info</h4>
          <div>
            <label><strong>Dept:</strong></label> {{ currentCourse.Dept }}
          </div>
          <div>
            <label><strong>CourseNumber:</strong></label> {{ currentCourse.CourseNumber }}
          </div>
          <div>
            <label><strong>Level:</strong></label> {{ currentCourse.Level }}
          </div>
          <div>
            <label><strong>Hours:</strong></label> {{ currentCourse.Hours }}
          </div>
          <div>
            <label><strong>Name:</strong></label> {{ currentCourse.Name }}
          </div>
          <div>
            <label><strong>Description:</strong></label> 
            {{ currentCourse.Description }}
          </div>
          
          <!-- <div>
            <label><strong>Status:</strong></label> {{ currentCourse.published ? "Published" : "Pending" }}
          </div> -->
          <a class="badge badge-warning" :href="'/update/' + currentCourse.CourseNumber"> 
            <button class="btn btn-success" >Update</button>
          </a>
        
          <a class="badge badge-warning" :href="'/delete/' + currentCourse.CourseNumber">
          <span style="padding-left:20px;">
          <button class="btn btn-danger">Delete</button>
          </span>
          </a>
        </div>
        <div v-else>
          <br />
          <p>Please click on a Course...</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import CourseDataService from "../services/CourseDataService";
  export default {
    name: "courses-list",
    data() {
      return {
        courses: [],
        displayCourses: [],
        currentCourse: null,
        currentIndex: -1,
        CourseNumber: "",
        searched: false,
        courseNumberSearched: []
      };
    },
    methods: {
      retrieveCourses() {
        CourseDataService.getAll()
          .then(response => {
            this.courses = response.data;
            this.displayCourses = this.courses;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
      refreshList() {
        this.retrieveCourses();
        this.currentCourse = null;
        this.currentIndex = -1;
      },
      setActiveCourse(course, index) {
        this.currentCourse = course;
        this.currentIndex = index;
      },
      // removeAllCourses() {
      //   CourseDataService.deleteAll()
      //     .then(response => {
      //       console.log(response.data);
      //       this.refreshList();
      //     })
      //     .catch(e => {
      //       console.log(e);
      //     });
      // },
      
      searchCourseNumber() {
        let filteredCourses = this.courses.filter(course => course.CourseNumber == this.CourseNumber)
        if(filteredCourses[0] == null){
          this.displayCourses = this.courses;
        }
        else{
        console.log(filteredCourses);
        console.log(filteredCourses[0].CourseNumber);
        this.displayCourses = filteredCourses;
        this.searched = true;
        }

        // CourseDataService.findByCourseNumber(this.CourseNumber)
        //   .then(response => {
        //     this.courses = response.data;
        //     console.log(response.data);
        //   })
        //   .catch(e => {
        //     console.log(e);
        //   });
      }
    },
    mounted() {
      this.retrieveCourses();
    }
  };
  </script>
  <style>
  .list {
    text-align: left;
    max-width: 3000px;
    margin: auto;
    line-height: 2;
  }
  </style>