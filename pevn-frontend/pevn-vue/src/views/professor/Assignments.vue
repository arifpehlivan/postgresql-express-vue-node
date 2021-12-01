<template>
  <v-container class="text-center">
      <v-alert calss="text-start" text v-model="alert.show" :type="alert.type" dismissible>{{
      alert.message
    }}</v-alert>
    <h1 class="font-weight-light">{{ course.c_name }}</h1>
    <h2 class="font-weight-thin">{{ course.c_description }}</h2>
    <v-row justify="center">
      <v-col md="9" sm="12">
        <v-simple-table fixed-header>
          <thead>
            <tr>
              <th class="text-center">Name</th>
              <th class="text-center">Description</th>
              <th class="text-center">File</th>
              <th class="text-center">Deliveries</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="assignment in assignmentsList" :key="assignment.id_a">
              <td>{{assignment.a_name}}</td>
              <td>{{assignment.a_description}}</td>
              <td><v-icon @click="open(assignment.a_file)">mdi-file-pdf-box</v-icon></td>
              <td>
                <v-icon color="cyan darken-1"
                @click="getDeliveries(assignment.id_a)"
                  >mdi-book-open-page-variant</v-icon
                >
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-dialog v-model="add" width="450">
      <v-card>
        <v-card-title>Create assignment</v-card-title>
        <v-card-text>
          <v-form ref="addForm" class="ma-3" @submit.prevent="addAssignment()">
            <v-file-input
              label="File"
              :rules="[(v) => !!v || 'File is required']"
              v-model="assignmentToAdd.a_file"
            >
            </v-file-input>
              <v-text-field
                prepend-icon="mdi-biohazard"
                label="Name"
                :rules="[(v) => !!v || 'Name is required']"
                v-model="assignmentToAdd.a_name"
              >
              </v-text-field>
              <v-textarea
                prepend-icon="mdi-bike"
                label="Description"
                :rules="[(v) => !!v || 'Description is required']"
                v-model="assignmentToAdd.a_description"
              >
              </v-textarea>
              <v-btn block class="success mt-3" type="submit">add</v-btn>
            
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-btn
      @click="add = true"
      color="deep-orange"
      large
      right
      fixed
      bottom
      fab
      dark
      ><v-icon>mdi-plus</v-icon></v-btn
    >
  </v-container>
</template>

<script>
export default {
  data: () => ({
    alert: {show: false},
    professsor: {},
    course: {},
    assignmentsList: [],
    assignmentToAdd: {},
    add: false,
  }),
  methods:{
      open(link){
          window.open(link)
      },
      async addAssignment(){
          let valid = this.$refs.addForm.validate();
          if(valid){
              try {
                  const newAssignment = new FormData();
                  newAssignment.append('a_name', this.assignmentToAdd.a_name);
                  newAssignment.append('a_description', this.assignmentToAdd.a_description);
                  newAssignment.append('a_file', this.assignmentToAdd.a_file);
                  
                  const res = await this.axios.post(`professor/assignment/${this.$route.params.id_c}`, newAssignment);
                  this.assignmentsList.push(res.data.assignment);
                  this.$refs.addForm.reset();
                  this.add = false;
                  this.alert = {
                      show: true,
                      type: 'success',
                      message: res.data.message
                  }
              } catch (error) {
                  console.log(error);
              }
          }
      },
      async getDeliveries(id_a){
          try {
              const res = await this.axios.get(`/professor/deliveries/${id_a}`);
              console.log(res.data);
          } catch (error) {
              console.log(error);
          }
      }
  },
  created: function () {
    this.professor = JSON.parse(sessionStorage.getItem("session"));
    if (this.professor == null) {
      this.$router.push("/");
    } else if (this.professor.role != "professor") {
      this.$router.push("/profile");
    } else {
      this.axios
        .get(`/professor/course/${this.$route.params.id_c}`)
        .then((res) => {
          this.course = res.data.course;
        })
        .catch((e) => {
          console.log(e);
        });
      this.axios
        .get(`/professor/course-assignments/${this.$route.params.id_c}`)
        .then((res) => {
          this.assignmentsList = res.data;
          console.log(this.assignmentsList);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  },
};
</script>

<style>
</style>