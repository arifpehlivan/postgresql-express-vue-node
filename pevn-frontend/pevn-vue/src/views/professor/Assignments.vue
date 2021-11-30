<template>
  <v-container class="text-center">
      <h1 class="font-weight-light">Lorem, ipsum dolor.</h1>
      <h2 class="font-weight-thin">Lorem ipsum dolor sit amet.</h2>
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
                          <td><v-icon>mdi-book-open</v-icon></td>
                      </tr>
                  </tbody>
              </v-simple-table>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>