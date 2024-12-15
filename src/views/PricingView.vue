<template>
  <div>
    <v-card-subtitle class="text--h6 text-center primary--text mt-4"
      >PRICING</v-card-subtitle
    >
    <v-card-title class="text--h4 md-text--h3 justify-center mt-md-8"
      >Pricing for any sized business</v-card-title
    >
    <v-card-subtitle class="md-text--h6 text-center mt-4"
      >Use the slider to select the number of product submissions you want each
      month. <br />
      The more products you submit the cheaper your pricing
      becomes!</v-card-subtitle
    >
    <v-card width="700" elevation="0" class="mx-auto">
      {{ posts }}
      <v-slider
        v-model="posts"
        :label="ex3.label"
        :thumb-color="ex3.color"
        :value="[0, 100]"
        min="0"
        max="100"
        track-color="#EFF0F6"
        track-fill-color="#FBBF23"
        thumb-label="always"
        class="mt-8 mt-md-16"
      ></v-slider>
    </v-card>
   
    <v-card rounded="xl" width="800" class="mx-auto mb-16 mt-12">
      <v-row no-gutters>
      <v-col cols="12" lg="6" md="12" sm="12">
        <v-card width="100%" color="transparent" elevation="0" class=" py-16 px-12">
          <v-card-title class="text--h6">
            Increase leads and sales to your store for only
          </v-card-title>
          <v-card-title>
            <span class="text--h2 mb-3">${{  parseFloat(getPlan).toFixed(2) }}</span> /monthly</v-card-title
          >
          <v-card-actions>
            <v-btn
              rounded="lg"
              block
              x-large
              color="#FBBF23"
              class="text-capitalize elevation-0 py-10"
              @click="subscribePlan"
            >
              Continue
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" lg="6" md="12" sm="12">
        <v-card
          color="#F3F3F3"
          width="100%"
          height="500"
          elevation="0"
          class="rightCard px-12 pt-8"
          style=""
        >
          <v-card-title class="text-h6 mt-16 pb-0"
            >What’s included</v-card-title
          >
          <v-list color="transparent" dense>
            <v-list-item>
              <v-list-item-icon>
                <img src="../assets/Vector.svg" alt="" />
              </v-list-item-icon>
              <v-list-item-title class="text--h6"
                >30 submissions per month</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <img src="../assets/Vector.svg" alt="" />
              </v-list-item-icon>
              <v-list-item-title class="text--h6"
                >Unlimited product clicks</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-icon class="pr-0">
                <img src="../assets/Vector.svg" alt="" />
              </v-list-item-icon>
              <v-list-item-title class="text--h6 pl-0"
                >Priority customer support</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
      
    </v-card>
  </div>
</template>

<script>
import { mapActions,mapGetters } from "vuex";
export default {
  data() {
    return {
      ex3: { val: 50, color: "white" },
      posts:30,
      priceOfPost:3.14,
      totalCost:'0',
      subscribePlanData:{
        name:'dsads',
        description:'dasd',
        duration:'20',
        price:'10'
      }
    };
  },
  methods: {
    ...mapActions(['subscribe','getPlans']),
    
    getsSubscribePlans() {
      this.getPlans()
        .then((response) => {
          if (response) {
            alert(response);
            setTimeout(() => {
              // this.errors = {};
            }, 5000);
          } else {
            // alert(response)
            // this.loading = false;
            // this.$emit("requestStatus", response.data);
          }
        })
        .finally(() => {
          // this.$emit("overlay", false);
        });
    },
    },
    computed: {
    ...mapGetters({ }),
    getPlan(){
      if(this.posts===1){
        this.priceOfPost = 5
      }
      else if(this.posts>=1 && this.posts<=5){
        this.priceOfPost=4
      }
      else if(this.posts>=6 && this.posts<=10){
        this.priceOfPost=3.50
      }
      else if(this.posts>=11 && this.posts<=20){
        this.priceOfPost=3.27
      }
      else if(this.posts>=21 && this.posts<=50){
        this.priceOfPost=3.14
      }
      else if(this.posts>=51 && this.posts<=80){
        this.priceOfPost=3.10
      }
      else {
        this.priceOfPost=3.07
      }
      // this.plan=50
      this.totalCost=this.priceOfPost*this.posts
      return this.totalCost
    }
    },
    mounted(){
      // this.getsSubscribePlans()
    }
};
</script>

<style scoped></style>
