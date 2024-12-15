<template>
  <!-- <v-container> -->
  <v-card class="grey lighten-5 md-px-16 px-8  py-8
" >
      <v-card-text>
    <v-row>
      <v-col cols="12" lg="6" md="12" sm="12">
        <v-toolbar-title class="pl-16" link @click="changeRoute()">
        <img src="../assets/footerLogo.svg" width="381" height="31.43">
      </v-toolbar-title>
        <div>
      <div
        class="mt-4 pl-md-16"> &copy; {{ new Date().getFullYear() }}I•Need•Retail•Therapy. All Rights
        Reserved</div
      >
      <div class="body-1 font-weight-regular pl-md-16 mt-6">Questions? Contact us at <span class="blue--text"> support@i-need-retail-therapy.com </span></div>
     

    </div>
      </v-col>

      <v-col cols="12" lg="6" md="12" sm="12">
        <div class="body-1 font-weight-regular p-16">
          Some products displayed may earn us a commission if you purchase
          through our links. I•Need•Retail•Therapy is a participant in the
          Amazon Services LLC Associates Program.
        </div>
          <div class="body-1 font-weight-regular mt-6"> Affiliate links do not impact
          your cost as a consumer in anyway. Your cost to purchase goods is the
          same regardless of our affiliate links.
        </div>
      </v-col>
    </v-row>
  </v-card-text>
  </v-card>
<!-- </v-container> -->
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
    changeRoute() {
      this.$router.push({ path: "/" });
    },
  }
};
</script>
<style lang=""></style>
