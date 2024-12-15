<template>
  <div class="pt-8 px-8">
    <v-row class="justify-between">
      <v-col cols="12" lg="4" md="12" sm="12">
        <img src="../assets/logo.svg" alt="" class="mt-2" />
      </v-col>
      <v-col cols="12" lg="4" md="12" sm="12">
        <v-text-field dense rounded filled prepend-inner-icon="mdi-magnify"
 label="Search"></v-text-field>
      </v-col>
      <v-col cols="12" lg="4">
        <div class="d-flex justify-end">
          <span class="mt-2 mr-8" @click="openModal">Dashboard</span>
          <v-btn color="#333333" class="elevation-0 text-capitalize amber--text text--accent-3 px-6 py-6 ">Submit a Product</v-btn>
        </div>
      </v-col>
    </v-row>
    <v-card-title>Credits Remaining This Month: <span class="green--text ml-2"> 30</span></v-card-title>
   
  </div>
</template>
<script>
export default {
  data() {
    return {
      buttons: [
        {
          title: " Clothing",
        },
        {
          title: "Men’s Clothing",
        },
        {
          title: " Women’s Clothing",
        },
        {
          title: " Tech & Gadgets",
        },
        {
          title: " Health & Wellness",
        },
        {
          title: " Pets",
        },
        {
          title: " Home Goods",
        },
        {
          title: " Food & Beverage",
        },
      ],
    };
  },
  methods:{
    openModal(){
      this.$emit('openDialog',true)
    }
  }
};
</script>

<style scoped></style>
