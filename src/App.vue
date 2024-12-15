<template>
  <v-app>

    <v-main>
      <router-view @requestStatus="handleStatus" @overlay="toggleOverlay" />
      <status-message v-if="isShowing" :data="statusData"></status-message>
      <v-overlay :value="showOverlay" color="black">
        <v-progress-circular
          indeterminate
          size="100"
          color="light"
        ></v-progress-circular>
      </v-overlay>
    </v-main>
  </v-app>
</template>

<script>
  import statusMessage from "./components/Message.vue";
  import InputText from "./components/InputText";


export default {
  name: "App",
  components: {
    statusMessage,
    InputText
  },
  data: () => ({
    isShowing: false,
    statusData: null,
    showOverlay: false,
    firstname: "",
    email: "",
    address: ""
    //
  }),
  
    methods: {
      handleStatus(payload) {
        this.isShowing = true;
        this.statusData = payload;
        setTimeout(() => {
          this.isShowing = false;
        }, 5000);
      },
      toggleOverlay(payload) {
        this.showOverlay = payload;
      },
    },
  
};
</script>
