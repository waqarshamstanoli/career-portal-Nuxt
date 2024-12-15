<template>
  <div>
    <v-card-subtitle class="text--h6 text-center primary--text font-weight-bold mt-4"
      >PRICING</v-card-subtitle
    >
    <v-card-title
      class=" text--h3 justify-center mt-md-6 font-weight-bold"
      >Pricing for any sized business</v-card-title
    >
    <div class="md-text--h6 text-center mt-6">
      Use the slider to select the number of product submissions you want each
      month. <br />
      The more products you submit the cheaper your pricing becomes!
    </div>
    <v-card width="700"  elevation="0" class="mx-auto">
      <v-slider
        v-model="pricingData.monthly_allowed_submitions"
        :label="wasdad"
        :thumb-color="ex3.color"
        :value="[0, 100]"
        min="0"
        max="100"
        track-color="#EFF0F6"
        track-fill-color="#FBBF23"
        thumb-label="always"
        thumb-size="0"
        class="mt-8 mt-md-16"
      >
        <template v-slot:thumb-label>
          <div class="sliderThumb">
            {{ pricingData.monthly_allowed_submitions }}
          </div>
        </template>
      </v-slider>
    </v-card>

    <v-card rounded="xl" width="800" height="440" class="mx-auto mb-16 mt-12">
      <v-row no-gutters>
        <v-col cols="12" lg="6" md="12" sm="12">
          <v-card
            width="100%"
            color="transparent"
            elevation="0"
            class="py-16 px-12"
          >
            <v-card-title class="text--h6 px-0">
              Increase leads and sales to your <br />
              store for only
            </v-card-title>
            <v-card-title class="px-0">
              <span class="text--h2 mb-3 font-weight-bold"
                >${{ parseFloat(getPlan).toFixed(2) }}</span
              >
              /monthly</v-card-title
            >
            <v-card-actions>
              <v-btn
                rounded="lg"
                block
                x-large
                color="#FBBF23"
                class="text-capitalize hoverEffect pricing py-10 mt-4"
                @click="emitData('payment')"
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
            height="440"
            elevation="0"
            class="rightCard px-12 pt-8"
            style=""
          >
            <v-card-title class="text-h6 mt-16 pb-0"
              >What’s included</v-card-title
            >
            <v-list color="transparent" dense>
              <v-list-item class="pr-0">
                <v-list-item-icon>
                  <img src="../assets/Check Circle Icon.svg" alt="" />
                </v-list-item-icon>
                <v-list-item-title class="text--h6"
                  >{{ pricingData.monthly_allowed_submitions }} submissions per
                  month</v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <img src="../assets/Check Circle Icon.svg" alt="" />
                </v-list-item-icon>
                <v-list-item-title class="text--h6"
                  >Unlimited product clicks</v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="pr-0">
                  <img src="../assets/Check Circle Icon.svg" alt="" />
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
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["pricingData"],
  data() {
    return {
      ex3: { val: 50, color: "#FBBF23" },
      posts: 30,
      priceOfPost: 3.14,
      totalCost: "0",
    };
  },
  methods: {
    ...mapActions(["subscribe", "getPlans"]),
    emitData(component) {
      this.$emit("changeComponent", component);
    },
    subscribePlan() {
      this.subscribe(this.subscribePlanData)
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
    ...mapGetters({}),
    getPlan() {
      if (this.pricingData.monthly_allowed_submitions === 1) {
        this.priceOfPost = 5;
      } else if (
        this.pricingData.monthly_allowed_submitions >= 1 &&
        this.pricingData.monthly_allowed_submitions <= 5
      ) {
        this.priceOfPost = 4;
      } else if (
        this.pricingData.monthly_allowed_submitions >= 6 &&
        this.pricingData.monthly_allowed_submitions <= 10
      ) {
        this.priceOfPost = 3.5;
      } else if (
        this.pricingData.monthly_allowed_submitions >= 11 &&
        this.pricingData.monthly_allowed_submitions <= 20
      ) {
        this.priceOfPost = 3.27;
      } else if (
        this.pricingData.monthly_allowed_submitions >= 21 &&
        this.pricingData.monthly_allowed_submitions <= 50
      ) {
        this.priceOfPost = 3.14;
      } else if (
        this.pricingData.monthly_allowed_submitions >= 51 &&
        this.pricingData.monthly_allowed_submitions <= 80
      ) {
        this.priceOfPost = 3.1;
      } else {
        this.priceOfPost = 3.07;
      }
      this.pricingData.submitions_balance =
        this.priceOfPost * this.pricingData.monthly_allowed_submitions;
      return this.pricingData.submitions_balance;
    },
  },
  mounted() {
    // this.getsSubscribePlans()
  },
};
</script>

<style scoped>

</style>
