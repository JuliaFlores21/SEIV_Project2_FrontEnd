<template>
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="Dept">Dept</label>
          <input
            type="text"
            class="form-control"
            id="Dept"
            required
            v-model="course.Dept"
            name="Dept"
          />
        </div>
        <div class="form-group">
          <label for="CourseNumber">CourseNumber</label>
          <input
            class="form-control"
            id="CourseNumber"
            required
            v-model="course.CourseNumber"
            name="CourseNumber"
          />
        </div>
        <div class="form-group">
          <label for="Level">Level</label>
          <input
            class="form-control"
            id="Level"
            required
            v-model="course.Level"
            name="Level"
          />
        </div>
        <div class="form-group">
          <label for="Hours">Hours</label>
          <input
            class="form-control"
            id="Hours"
            required
            v-model="course.Hours"
            name="Hours"
          />
        </div>
        <div class="form-group">
          <label for="Name">Name</label>
          <input
            class="form-control"
            id="Name"
            required
            v-model="course.Name"
            name="Name"
          />
        </div>
        <div class="form-group">
          <label for="Description">Description</label>
          <input
            class="form-control"
            id="Description"
            required
            v-model="course.Description"
            name="Description"
          />
        </div>
        <button @click="updateCourse" class="btn btn-success">Submit</button>
      </div>
      
      <div v-else>
        <h4>You submitted successfully!</h4>

        <a class="badge badge-warning" :href="'/'">
        <span style="padding-left:20px;">
        <button class="btn btn-danger">Home</button>
        </span>
        </a>
      </div>
    </div>
  </template>
  <script>
  import CourseDataService from "../services/CourseDataService";
  export default {
    name: "update-course",
    data() {
      return {
        course: {
          Dept: "",
          CourseNumber: "",
          Level: "",
          Hours: "",
          Name: "",
          Description: "",
          published: false
        },
        submitted: false
      };
    },
    methods: {
      updateCourse() {
        var data = {
          Dept: this.course.Dept,
          CourseNumber: this.course.CourseNumber,
          Level: this.course.Level,
          Hours: this.course.Hours,
          Name: this.course.Name,
          description: this.course.description,
        };
        //console.log(this.$route.params.CourseNumber)
        CourseDataService.update((this.$route.params.CourseNumber), data)
            .then(response => {
                console.log(response.data);
                this.message = 'The Course was updated successfully!';
                this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          })
      },
      
      updateCourses() {
        this.submitted = false;
        this.course = {};
      }
    }
  };
  </script>
  <style>
  .submit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>