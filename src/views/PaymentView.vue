<template>
  <v-container>
    <Pricing
      v-if="showComponent === 'pricing'"
      @changeComponent="changeComponent"
      :pricingData="subscribePlanData"
    >
  </Pricing>
    <Payment-details
      v-if="showComponent === 'payment'"
      @subscribePlan="subscribePlan"
      @changeComponent="changeComponent"
      :paymentData="subscribePlanData"
      :loginData="loginData"
      @loginUser="login"
      
      :Expirydate="date"
      :moveNext="changeStep"
      
    ></Payment-details>
  </v-container>
</template>
<script>
import PaymentDetails from "@/components/PaymentDetails.vue";
import PurchaseSummary from "@/components/PurchaseSummary.vue";
import Pricing from "@/components/Pricing.vue";
import TextField from "@/components/TextField.vue";
import moment from "moment";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    PaymentDetails,
    TextField,
    Pricing,
    PurchaseSummary,
  },
  data() {
    return {
      
      showComponent: "pricing",
      loginData: { email: "", password: "" },
      changeStep:1,
     date: {month:'',
      year:''},
      // subscribePlanData: {
      //   name: "dsads",
      //   description: "dasd",
      //   posts: "20",
      //   totalCost: "10",
      // },
     
      subscribePlanData: {
        monthly_allowed_submitions: 1,
        submitions_balance: 5,
        fb_adds_balance: 0,
        insta_adds_balance: 0,
        twitter_adds_balance: 0,
        google_adds_balance: 0,
        tax: 11,
        card_no: "",
        expiry_date: '',
        card_username: "",
        cvc: "",
        save_card: true,
      },
    };
  },
  methods: {
    ...mapActions(['subscribe','loginUser']),
    changeComponent(component) {
      this.showComponent = component;
    },
    subscribePlan() {
      this.subscribePlanData.expiry_date = this.date.month + '/' + this.date.year
      // this.subscribePlanData.expiry_date =  moment().format('MM/YYYY')
      this.subscribe(this.subscribePlanData)
        .then((response) => {
          if (response) {
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
    login() {
      this.changeStep=1
      this.loginUser(this.loginData)
        .then((response) => {
          if (response.data.errors) {
            alert(response);
            setTimeout(() => {
            }, 5000);
          } else {
            
            this.changeStep=2
            
            this.$emit("requestStatus", response.data.msg);
            localStorage.setItem('access_token', response.data.token)
          }
        })
        .finally(() => {
        });
    },
  },
  computed: {
    ...mapGetters({}),
    
  },
};
</script>
