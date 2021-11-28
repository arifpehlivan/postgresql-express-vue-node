<template>
  <v-container>
    <h1 class="font-weight-light">My courses</h1>
    <v-row justify="center">
      <v-card class="ma-3" max-width="344" v-for="course in coursesList" :key="course.id_c">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        ></v-img>
        <v-card-title>{{course.name}}</v-card-title>
        <v-card-subtitle>{{course.description}}</v-card-subtitle>
        <v-card-actions>
            <v-btn color="blue" small dark fab><v-icon>mdi-pencil</v-icon></v-btn>
            <v-btn color="red" small dark fab><v-icon>mdi-delete</v-icon></v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data: () => ({
        professor: {},
        coursesList: []
    }),
    created: async function (){
        this.professor = JSON.parse(sessionStorage.getItem("session"));
        if(this.professor==null){
            this.$router.push('/');
        } else if(this.professor.role !='professor'){
            this.$router.push('/profile');
        } else{
            try {
                const res = await this.axios.post('/professor/my-courses', this.professor);
                this.coursesList = res.data;
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>

<style>
</style>