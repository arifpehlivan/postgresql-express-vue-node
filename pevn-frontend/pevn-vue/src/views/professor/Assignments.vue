<template>
  <v-container class="text-center">
      <h1 class="font-weight-light">{{course.c_name}}</h1>
      <h2 class="font-weight-thin">{{course.c_description}}</h2>
      <v-row justify="center">
          <v-col md="9" sm="12">
              <v-simple-table>
                  <thead>
                      <tr>
                          <th class="text-center">Name</th>
                          <th class="text-center">Description</th>
                          <th class="text-center">File</th>
                          <th class="text-center">Deliveries</th>
                          
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Lorem, ipsum.</td>
                          <td>Lorem ipsum dolor sit amet.</td>
                          <td><v-icon>mdi-file-pdf-box</v-icon></td>
                          <td><v-icon color="cyan darken-1">mdi-book-open-page-variant</v-icon></td>
                      </tr>
                  </tbody>
              </v-simple-table>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    data: () => ({
        professsor: {},
        course: {},
        assignmentsList: []
    }),
    created: async function () {
    this.professor = JSON.parse(sessionStorage.getItem("session"));
    if (this.professor == null) {
      this.$router.push("/");
    } else if (this.professor.role != "professor") {
      this.$router.push("/profile");
    } else {
      this.axios.get(`/professor/course/${this.$route.params.id_c}`)
      .then(res =>{
          this.course = res.data.course;
      })
      .catch(e => {
          console.log(e);
      });
      this.axios.get(`/professor/course-assignments/${this.$route.params.id_c}`)
      .then(res =>{
          this.assignmentsList = res.data;
          console.log(this.assignmentsList);
      })
      .catch(e => {
          console.log(e);
      });
    }
  }
}
</script>

<style>

</style>