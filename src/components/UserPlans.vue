<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="8" md="12" sm="12">
        <div class="text--h6 ml-md-8">
          You’re currently subscribed for 30 product posts at $90 /month Use the
          slider to update the number of posts you have allotted each month.
        </div>
      </v-col>
      <v-col cols="12" lg="8" md="12" sm="12">
        <v-slider
        class="ml-md-6"
          v-model="ex3.val"
          :label="wasdad"
        :thumb-color="ex3.color"
        :value="[0, 100]"
        min="0"
        max="100"
        track-color="#EFF0F6"
        track-fill-color="#FBBF23"
        thumb-label="always"
        thumb-size="0"
        >
        <template v-slot:thumb-label>
          <div class="sliderThumb">
            {{ ex3.val }}
          </div>
        </template></v-slider>
      </v-col>
      <v-col cols="12" lg="6" md="12" sm="12">
        <v-card class="px-4" elevation="0">
          <v-card-text>
            <div class="text-h6">
              Optional Marketing Add-ons <br />
              <span class="subtitle-2">
                (Set a budget, and our team of experts will advertise your
                products on the channels you select)
              </span>
            </div>
            <div class="d-flex">
            <v-checkbox
              v-model="checkbox"
              :label="`Facebook Ads: ${checkbox.toString()}`"
            ></v-checkbox>
            <TextField :labelName="`Monthly Budget`" class="ml-8 mt-3"></TextField>
          </div>
            <v-checkbox
              v-model="checkbox"
              :label="`Instagram Ads: ${checkbox.toString()}`"
            ></v-checkbox>
            <v-checkbox
              v-model="checkbox"
              :label="`Twitter Ads: ${checkbox.toString()}`"
            ></v-checkbox>
            <v-checkbox
              v-model="checkbox"
              :label="`Google AdWords: ${checkbox.toString()}`"
            ></v-checkbox>
          </v-card-text>
          <v-card-actions>
            <v-btn large color="#FBBF23" class="text-capitalize elevation-0 userProfile py-2">
              save changes
            </v-btn>
            <div class="subtitle-2 ml-16 mt-2">Cancel</div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TextField from './TextField.vue';
export default {
  components:{
    TextField
  },
  data() {
    return {
      ex3: { val: 50, color: "white" },
      checkbox: true,
    };
  },
};
</script>

<style scoped></style>
