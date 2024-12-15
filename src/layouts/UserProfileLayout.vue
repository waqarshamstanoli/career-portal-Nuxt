<template>
    <div class="dashboard-layout">
      <div class="">
        <Top-bar @openDialog="userModal=true"></Top-bar>
  
        <dashboard-content></dashboard-content>
  
        <!-- <content-footer></content-footer> -->
      </div>
  
      <v-dialog v-model="userModal" max-width="500">
        <v-card class="card-shadow pb-8 px-4">
          <v-card-text>
            <div class="d-flex justify-space-between pt-5 pb-3">
            </div>
            <v-card-title class="text-h5 justify-center">Create an account</v-card-title>
            <div class="subtitle text-center">Create an account and submit your products for our visitors to discover!</div>
            <v-text-field outlined dense label="Email" class="mt-3"> </v-text-field>
  
            <v-text-field outlined dense label="Password" class="mt-3"> </v-text-field>
  
          </v-card-text>
          <v-card-actions>
            <v-btn block color="#333333" class="text-capitalize elevation-0 mx-auto amber--text text--accent-3 px-6 py-6 ">Create Account</v-btn>
          </v-card-actions>
          <div class="subtitle text-center mt-16">Already have an account? Sign In</div>
        </v-card>
      </v-dialog>
    </div>
  </template>
  <script>
  import DashboardContent from "../components/ContentView.vue";
import TopBar from "../layouts/ProfileTopBar.vue"
  export default {
    components: {
    DashboardContent,
    TopBar
  },
    data(){
        return{

        }
    }
  }
  </script>