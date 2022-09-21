<template>
  <div class="col-md4 offset-md-4">
    <div v-if="!submitted" >

        <h4>Are you sure you want to delete this course?</h4>
       

        <!-- <div>
          <label><strong>Status:</strong></label> {{ currentCourse.published ? "Published" : "Pending" }}
        </div> -->
        <button @click="deleteCourse" class="btn btn-success">Delete</button>

      
        <a class="badge badge-warning" :href="'/'">
        <span style="padding-left:20px;">
        <button class="btn btn-danger">Cancel</button>
        </span>
        </a>
    </div>
    <div v-else>
        <h4>Deleted successfully!</h4>
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
    name: "courses-home",
    props: [ "CourseNumber" ],    
    data() {
      return {
        currentCourse: this.currentCourse=CourseDataService.get((this.$route.params.CourseNumber)),
        message: '',
        submitted: false
      };
    },
    methods: {
      // getCourse(CourseNumber) {
      //    console.log(this.$route.params.CourseNumber)
      //   CourseDataService.get(CourseNumber)
      //     .then(response => {
      //       this.currentCourse = response.data;
      //       console.log(response.data);
      //     })
      //     .catch(e => {
      //       console.log(e);
      //     });
      // },


      deleteCourse() {
      CourseDataService.delete((this.$route.params.CourseNumber))
        .then(response => {
          console.log(response.data);
          this.submitted = true;

          //this.$router.push({ name: "courses-home" });
        })
        .catch(e => {
          console.log(e);
        });
    }
    },
    mounted() {
      this.message = '';
      console.log(this.CourseNumber)
      //this.getCourse(this.CourseNumber);
    }
  };
  </script>
  <style>
  .edit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>