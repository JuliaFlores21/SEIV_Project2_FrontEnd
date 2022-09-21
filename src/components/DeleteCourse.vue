<template>
    <div v-if="currentCourse" class="col-md4 offset-md-4">
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
          <button @click="deleteCourse" class="btn btn-success">Delete</button>

        
          <a class="badge badge-warning" :href="'/' + currentCourse.CourseNumber">
          <span style="padding-left:20px;">
          <button class="btn btn-danger">Cancel</button>
          </span>
          </a>
        </div>
</template>







<script>
    import CourseDataService from "../services/CourseDataService";
    export default {
      name: "courses-home",
      props: [ "CourseNumber" ],    
      data() {
        return {
          currentCourse: null,
          message: '',
          //submitted: false

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
        // updatePublished(status) {
        //   var data = {
        //     Dept: this.currentCourse.Dept,
        //     CourseNumber: this.currentCourse.CourseNumber,
        //     Level: this.currentCourse.Level,
        //     Hours: this.currentCourse.Hours,
        //     Name: this.currentCourse.Name,
        //     Description: this.currentCourse.Description,
        //     published: status
        //   };
        //   CourseDataService.update(this.currentCourse.CourseNumber, data)
        //     .then(response => {
        //       this.currentCourse.published = status;
        //       console.log(response.data);
        //     })
        //     .catch(e => {
        //       console.log(e);
        //     });
        // },
        deleteCourse() {
        CourseDataService.delete(this.currentCourse.CourseNumber)
          .then(response => {
            console.log(response.data);
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
        this.getCourse(this.CourseNumber);
      }
    };
    </script>
    <style>
    .edit-form {
      max-width: 300px;
      margin: auto;
    }
    </style>