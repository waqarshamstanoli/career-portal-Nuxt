<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="5" md="12" sm="12">
        <div class="paymentMethod">
          <div class="d-flex justify-space-between">
            <img src="../assets/Mastercard.svg" alt="">
            <v-btn outlined color="#FF3B30" class="text-capitalize delete elevation-0">Delete</v-btn>
          </div>
          <div class="body-1 mt-2">Jane Doe</div>
          <div class="d-flex justify-space-between ">
            <div>
              <div class="body-1">**** **** **** 2395</div>
            </div>
            <div class="subtitle-2">Card expires on 10/24</div>
          </div>
          
        </div>
      </v-col>
    </v-row>
    <v-card elevation="0" width="345">
      <v-card-title class="pl-0 mt-4"> Add New Card </v-card-title>
      <TextField :labelName="`Name on card`" class="mt-4"> </TextField>
      <TextField :labelName="`Card number`"> </TextField>
      <v-row>
        <v-col lg="4">
          <TextField :labelName="`Exp`"> </TextField>
        </v-col>
        <v-col lg="4">
          <TextField :labelName="``"> </TextField>
        </v-col>
        <v-col lg="4">
          <TextField :labelName="`CVC`"> </TextField>
        </v-col>
      </v-row>
      <v-switch
      v-model="switch1"
      :label="`Save card for future billing?: `"
    ></v-switch>
      <v-card-actions class="pl-0">
        <v-btn large color="#FBBF23" class="text-capitalize elevation-0 userProfile py-2">
          save changes
        </v-btn>
        <div class="subtitle-2 ml-16 mt-2">Reset</div>
      </v-card-actions>
      <v-card-title class="text--h6 mt-6"
        >Do you want to cancel your subscription? This can’t be
        undone!</v-card-title
      >
      <v-card-actions>
        <v-btn large color="#FF3B30" class=" cancel elevation-0 text-capitalize px-8 py-2">
            Cancel Subscription
        </v-btn>
      </v-card-actions>
    </v-card>
    
  </v-container>
</template>

<script>
import TextField from "./TextField.vue";
export default {
  components: {
    TextField,
  },
  data() {
    return {
      switch1: true,

    };
  },
};
</script>

<style scoped></style>
