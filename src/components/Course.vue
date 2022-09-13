<template>
    <div v-if="currentCourse" class="edit-form">
      <h4>Course</h4>
      <form>
        <div class="form-group">
          <label for="Dept">Dept</label>
          <input type="text" class="form-control" id="Dept"
            v-model="currentCourse.Dept"
          />
        </div>
        <div class="form-group">
          <label for="CourseNumber">CourseNumber</label>
          <input type="text" class="form-control" id="CourseNumber"
            v-model="currentCourse.CourseNumber"
          />
        </div>
        <div class="form-group">
          <label for="Level">Level</label>
          <input type="text" class="form-control" id="Level"
            v-model="currentCourse.Level"
          />
        </div>
        <div class="form-group">
          <label for="Hours">Hours</label>
          <input type="text" class="form-control" id="Hours"
            v-model="currentCourse.Hours"
          />
        </div>
        <div class="form-group">
          <label for="Name">Name</label>
          <input type="text" class="form-control" id="Name"
            v-model="currentCourse.Name"
          />
        </div>
        <div class="form-group">
          <label for="Description">Description</label>
          <input type="text" class="form-control" id="Description"
            v-model="currentCourse.Description"
          />
        </div>

        <div class="form-group">
          <label><strong>Status:</strong></label>
          {{ currentCourse.published ? "Published" : "Pending" }}
        </div>
      </form>
      <button class="badge badge-primary mr-2"
        v-if="currentCourse.published"
        @click="updatePublished(false)"
      >
        UnPublish
      </button>
      <button v-else class="badge badge-primary mr-2"
        @click="updatePublished(true)"
      >
        Publish
      </button>
      <button class="badge badge-danger mr-2"
        @click="deleteCourse"
      >
        Delete
      </button>
      <button type="submit" class="badge badge-success"
        @click="updateCourse"
      >
        Update
      </button>
      <p>{{ message }}</p>
    </div>
    <div v-else>
      <br />
      <p>Please click on a Course...</p>
    </div>
  </template>
  <script>
  import CourseDataService from "../services/CourseDataService";
  export default {
    name: "courses-home",
    data() {
      return {
        currentCourse: null,
        message: ''
      };
    },
    methods: {
      getCourse(CourseNumber) {
        CourseDataService.get(CourseNumber)
          .then(response => {
            this.currentCourse = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
      updatePublished(status) {
        var data = {
          Dept: this.currentCourse.Dept,
          CourseNumber: this.currentCourse.CourseNumber,
          Level: this.currentCourse.Level,
          Hours: this.currentCourse.Hours,
          Name: this.currentCourse.Name,
          Description: this.currentCourse.Description,
          published: status
        };
        CourseDataService.update(this.currentCourse.CourseNumber, data)
          .then(response => {
            this.currentCourse.published = status;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
      updateCourse() {
        CourseDataService.update(this.currentCourse.CourseNumber, this.currentCourse)
          .then(response => {
            console.log(response.data);
            this.message = 'The Course was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
      },
      deleteCourse() {
        CourseDataService.delete(this.currentCourse.CourseNumber)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: "courses-home" });
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.message = '';
      this.getCourse(this.$route.params.CourseNumber);
    }
  };
  </script>
  <style>
  .edit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>