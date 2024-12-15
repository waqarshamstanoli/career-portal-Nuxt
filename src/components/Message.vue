<template>
    <v-snackbar v-model="isShowing" right id="statusMessage" class="ma-0" :color="data.error ? 'error': 'success'">
      {{ data }}
      <!-- <div v-if="Object.keys(data.errors).length">
        <v-list color="rgba(0,0,0,0)" dense>
          <v-list-item dense class="statusList" v-for="(error, index) in data.errors" :key="index">
            <v-list-item-icon>
              <v-icon class="white--text">mdi-alert-circle-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content
              class="white--text"
              v-for="(e, index) in error"
              :key="index"
            >{{ e }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
      <div v-else class="white--text">
          <v-list color="rgba(0,0,0,0)" dense>
          <v-list-item class="statusList" dense>
            <v-list-item-icon>
              <v-icon class="white--text">mdi-information-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="white--text">{{ data.message }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </div> -->
    </v-snackbar>
  </template>
  
  <script>
  export default {
    props:['data'],
    // props: {
    //   data: {
    //     type: any,
    //     required: false,
    //     default: () => ({
    //       error: false,
    //       data: [],
    //       message: "message"
    //     })
    //   }
    // },
    data: () => ({
      isShowing: false
    }),
    mounted() {
      this.isShowing = true;
    },
    beforeDestroy() {
      this.isShowing = false;
    }
  };
  </script>
  
  <style>
  #statusMessage {
    /*position: absolute;*/
    /*width: 20%;*/
    /*margin-right: 24px;*/
    /*z-index: 1000;*/
    /*bottom: 0px;*/
    /*right: 0px;*/
    /*animation: statusAnim linear 1s;*/
  }
  .statusList {
    list-style-type: none;
  }
  #statusMessage * {
    text-transform: capitalize;
  }
  </style>