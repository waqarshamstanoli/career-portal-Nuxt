<template>
  <v-row class="justify-space-between">
    <v-col cols="12" lg="6">
      <v-stepper v-model="moveNext" elevation="0">
        <v-stepper-header class="elevation-0">
          <v-stepper-step  :complete="moveNext > 0" step="1" elevation="0">
            <v-card-title> Account </v-card-title>
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="moveNext > 1" step="2">
            <v-card-title> Payment </v-card-title>
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card elevation="0">
              <v-card-title class="mb-8 pl-0"> Account Details </v-card-title>

              <v-text-field
                outlined
                rounded
                label="Email Address"
                append-icon="mdi-checkbox-marked-circle"
                v-model="loginData.email"
              ></v-text-field>
              <v-text-field
                outlined
                rounded
                type="password"
                label="Password"
                append-icon="mdi-checkbox-marked-circle"
                v-model="loginData.password"
              ></v-text-field
            ></v-card>

            <v-card-actions>
              <div class="md-text--body-1 ml-auto mr-4 mt-3">
                Register for account
              </div>
              <v-btn
                large
                color="#FBBF23"
                class="text-capitalize elevation-0 hoverEffect payment py-2 mt-4"
                @click="emitLogin"
              >
                Continue
              </v-btn>
            </v-card-actions>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card elevation="0">
              <v-card-title class="mb-8 pl-0"> Payment Details </v-card-title>
              <TextField
                outlined
                rounded
                :labelName="`Name on card`"
                :modelValue="paymentData.card_username"
                @input="(newValue) => (paymentData.card_username = newValue)"
              >
              </TextField>
              <NumberField
                outlined
                rounded
                :inputType="`number`"
                :labelName="`Card number`"
                :modelValue="paymentData.card_no"
                @input="(newValue) => (paymentData.card_no = newValue)"
              >
              </NumberField>

              <v-row>
                <v-col lg="4">
                 

                   <NumberField
                    outlined
                    rounded
                    :labelName="`Exp`"
                    :modelValue="Expirydate.month"
                    @input="(newValue) => (Expirydate.month = newValue)"
                  >
                  </NumberField>
                  
                </v-col>
                <v-col lg="4">
                  <NumberField
                    outlined
                    rounded
                    :labelName="``"
                    :modelValue="Expirydate.year"
                    @input="(newValue) => (Expirydate.year = newValue)"
                  >
                  </NumberField>
                  
                  
                </v-col>
                <v-col lg="4">
                  <NumberField
                    outlined
                    rounded
                    :labelName="`CVC`"
                    :modelValue="paymentData.cvc"
                    @input="(newValue) => (paymentData.cvc = newValue)"
                  >
                  </NumberField>
                </v-col>
              </v-row>
            </v-card>

            <v-card-actions>
              <div
                class="subtitle ml-auto mt-3 mr-4 cursor-pointer"
                @click="moveNext = 1"
              >
                Back
              </div>
              <v-btn
                large
                color="#FBBF23"
                class="text-capitalize hoverEffect payment py-2 mt-4"
                @click="emitApiCall"
              >
                pay now
              </v-btn>
            </v-card-actions>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-col>
    <v-col cols="12" lg="5">
      <v-card color="#F3F3F3" class="px-4">
        <v-card-text>
          <v-card-title class="pl-0 pb-0 font-weight-bold"
            >Purchase Summary</v-card-title
          >
          <v-card-title class="pl-0">
            <span class="text--h6"
              >{{ paymentData.monthly_allowed_submitions }} product
              submissions</span
            ><v-spacer></v-spacer>
            <span class="font-weight-bold">
              ${{ parseFloat(paymentData.submitions_balance).toFixed(2) }}
              /month
            </span>
          </v-card-title>
          <div class="text--h6 mt-6 mb-8">
            Optional Marketing Add-ons <br />
            <div class="mt-2 body-1">
              (Set a budget, and our team of experts will advertise your
              products on the channels you select)
            </div>
          </div>
          <div class="d-flex">
            <v-checkbox
              :ripple="false"
              v-model="fb_adds_balance"
              label-color="red"
            ></v-checkbox>
            <label class="text--h6 black--text font-weight-medium mt-5"
                  >Facebook Ads </label
                >
            <NumberField
              v-if="fb_adds_balance"
              dense
              outlined
              :inputType="`number`"
              :labelName="`Monthly Budget`"
              :modelValue="paymentData.fb_adds_balance"
              @input="(newValue) => (paymentData.fb_adds_balance = newValue)"
              class="ml-8"
            ></NumberField>
          </div>
          <div class="d-flex">
            <v-checkbox
              :ripple="false"
              v-model="insta_adds_balance"
              
              class=""
              style="color: red !important"
            ></v-checkbox>
            <label class="text--h6 black--text font-weight-medium mt-5"
                  >Instagram Ads </label
                >
            <NumberField
              v-if="insta_adds_balance"
              dense
              outlined
              :labelName="`Monthly Budget`"
              :inputType="`number`"
              :modelValue="paymentData.insta_adds_balance"
              @input="(newValue) => (paymentData.insta_adds_balance = newValue)"
              class="ml-8"
            ></NumberField>
          </div>
          <div class="d-flex">
            <v-checkbox
              :ripple="false"
              v-model="twitter_adds_balance"
              
              class="mr-2"
            ></v-checkbox>
            <label class="text--h6 black--text font-weight-medium mt-5"
                  >Twitter Ads </label
                >
            <NumberField
              v-if="twitter_adds_balance"
              dense
              outlined
              :labelName="`Monthly Budget`"
              :inputType="`number`"
              :modelValue="paymentData.twitter_adds_balance"
              @input="
                (newValue) => (paymentData.twitter_adds_balance = newValue)
              "
              class="ml-12"
            ></NumberField>
          </div>
          <div class="d-flex">
            <v-checkbox
              :ripple="false"
              v-model="google_adds_balance"
              
            ></v-checkbox>
            <label class="text--h6 black--text font-weight-medium mt-5"
                  >Google AdWords </label
                >
            <NumberField
              v-if="google_adds_balance"
              dense
              outlined
              :labelName="`Monthly Budget`"
              :inputType="`number`"
              :modelValue="paymentData.google_adds_balance"
              @input="
                (newValue) => (paymentData.google_adds_balance = newValue)
              "
              class="ml-4"
            ></NumberField>
          </div>
          <v-card-title class="pl-0"
            ><span class="text--h6">Sub total</span>
            <v-spacer></v-spacer>
            <span class="font-weight-medium">
              ${{ subTotal }}
            </span></v-card-title
          >
          <v-card-title class="pl-0"
            ><span class="text--h6">Tax</span>
            <v-spacer></v-spacer>
            <span class="font-weight-medium"> ${{ calculateTax }} </span>
          </v-card-title>
          <v-card-title class="pl-0"
            ><span class="text--h6 font-weight-bold">Total</span>
            <v-spacer></v-spacer>
            <span class="font-weight-medium">${{ total }}</span></v-card-title
          >
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import TextField from "./TextField.vue";
import NumberField from "./NumberField.vue";
import moment from "moment";
export default {
  props: ["paymentData", "loginData",'Expirydate','moveNext'],
  components: { TextField,NumberField },
  data() {
    return {
      e1: 1,
      checkbox: true,
      fb_adds_balance: false,
      insta_adds_balance: false,
      twitter_adds_balance: false,
      google_adds_balance: false,
      menu: false,
      modal: false,
      show: false,
      
    };
  },
  methods: {
    emitApiCall() {
      this.$emit("subscribePlan", "");
      let dateFormat1 = moment(this.date).format("MM/YYYY");
    },
    emitLogin() {
      this.$emit("loginUser", "");
    },
  },
  computed: {
    subTotal() {
      let subTotal =  parseFloat(this.paymentData.submitions_balance) +
        parseFloat(this.paymentData?.fb_adds_balance) +
        parseFloat(this.paymentData.insta_adds_balance) +
        parseFloat(this.paymentData.twitter_adds_balance) +
        parseFloat(this.paymentData?.google_adds_balance)
        if (Number.isNaN(subTotal)){
          return 0
        }
        else {
          return subTotal
        }
      
    },
    calculateTax() {
      let Tax = this.subTotal + 0.12 * this.subTotal;
      if (Number.isNaN(Tax)) {
        return 0;
      } else {
        return Tax;
      }
    },
    total() {
      let Total =
        parseFloat(this.paymentData.submitions_balance) +
        parseFloat(this.paymentData?.fb_adds_balance) +
        parseFloat(this.paymentData.insta_adds_balance) +
        parseFloat(this.paymentData.twitter_adds_balance) +
        parseFloat(this.paymentData?.google_adds_balance);
      if (Number.isNaN(Total)) {
        return 0;
      } else {
        return Total;
      }
    },
    test() {
      return this.paymentData.expiry_date =  this.one + this.two
    },
  },
 
};
</script>
