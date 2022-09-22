<template>
    <div v-if="!submitted" class="col-md4 offset-md-4">
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

            <!-- <div class="form-group">
            <label><strong>Status:</strong></label>
            {{ currentCourse.published ? "Published" : "Pending" }}
            </div> -->
        </form>

        <button @click="updateCourse" class="btn btn-success">Update</button>

            <a class="badge badge-warning" :href="'/'">
            <span style="padding-left:130px;">
            <button class="btn btn-danger">Cancel</button>
            </span>
            </a>

        </div> 
        <div v-else>
            <h4>No course found or selected</h4>
            <a class="badge badge-warning" :href="'/'">
            <span style="padding-left:135px;">
            <button class="btn btn-danger">Return</button>
            </span>
            </a>
        </div>   
    </div>
    <div v-else>
        <h4>Course successfully updated click to return to list.</h4>
          <a class="badge badge-warning" :href="'/'">
            <span style="padding-left:20px;">
              <button class="btn btn-danger">Return</button>
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
          submitted: false

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
        updateCourse() {
            var data = {
            Dept: this.currentCourse.Dept,
            CourseNumber: this.currentCourse.CourseNumber,
            Level: this.currentCourse.Level,
            Hours: this.currentCourse.Hours,
            Name: this.currentCourse.Name,
            Description: this.currentCourse.Description,

          };
          CourseDataService.update(this.currentCourse.CourseNumber, data)
            .then(response => {
              console.log(response.data);
              this.message = 'The Course was updated successfully!';
              this.submitted = true;
            })
            .catch(e => {
              console.log(e);
            });
        },
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