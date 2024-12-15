<template>
  <div>
    <v-card
    outlined
    class="rounded mx-auto mb-8 px-8 py-6"
    max-width="100%"
    height="614"
    elevation="4"
  >
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-img
      height="250"
      class="cardImage"
      
      :src="
        'https://backend.i-need-retail-therapy.nsfwallstreet.com/public' +
        data?.thumbnail
      "
    >
    <transition name="slide-fade">
          <v-overlay
            v-if="hover"
            absolute
            color="#333333"
            opacity="0.9"
            z-index="4"
          >
          <div class="text-center" >
          <img src="../assets/Send.svg" alt="" class="cursor-pointer" @click="showSocialShare" >
        </div>
          </v-overlay>
        </transition></v-img>
        
      </template>
    </v-hover>

    <v-card-actions class="flex justify-space-between px-0">
      <div class="px-0 text--h5">
        <span class="red--text mr-4">
          <s> ${{ parseFloat(data?.sale_price).toFixed(0) }}</s></span
        >
        ${{ parseFloat(data?.price).toFixed(0) }}
      </div>

      <div v-if="data.gift_recipient" class="btnDiv text-right">
        <v-btn
          v-if="data.gift_recipient.toUpperCase() === 'FOR GRAD'"
          rounded
          block
          color="rgba(10, 132, 255, 0.1)"
          class="text-capitalize forGrad--text ml-auto btnDiv mt-2 px-4 py-4 mr-0"
          elevation="0"
        >
          {{ data.gift_recipient }}
        </v-btn>
        <v-btn
          v-if="data.gift_recipient.toUpperCase() === 'FOR GIRL FRIEND'"
          rounded
          block
          color="rgba(255, 45, 85, 0.1)"
          class="text-capitalize girlFriend--text ml-auto btnDiv mt-2 px-4 py-4 mr-0"
          elevation="0"
        >
          {{ data.gift_recipient }}
        </v-btn>
        <v-btn
          v-if="data.gift_recipient.toUpperCase() === 'FOR COUPLES'"
          rounded
          block
          color="rgba(10, 132, 255, 0.1)"
          class="text-capitalize purple--text ml-auto btnDiv mt-2 px-4 py-4 mr-0"
          elevation="0"
        >
          {{ data.gift_recipient }}
        </v-btn>
        <v-btn
          v-if="data.gift_recipient.toUpperCase() === 'FOR DAD'"
          rounded
          block
          color="rgba(10, 132, 255, 0.1)"
          class="text-capitalize blue--text ml-auto btnDiv mt-2 px-4 py-4 mr-0"
          elevation="0"
        >
          {{ data.gift_recipient }}
        </v-btn>
      </div>
    </v-card-actions>

    <v-card-text class="px-0 pt-0">
      <v-card-title class="black--text px-0 py-0 font-weight-normal fmDMSans">{{
        data?.name
      }}</v-card-title>

      <div class="body-1 mt-2 fmDMSans">
        {{ data?.description }}
      </div>
    </v-card-text>

    <v-card-actions class="d-flex justify-space-between pl-0 pb-8 card-actions">
      <div class="d-flex">
        <img
          src="../assets/heart.svg"
          alt=""
          class="cursor-pointer"
          @click="increamentLikes()"
        />
        <div class="ml-2">{{ likes }} Likes</div>
      </div>
      <v-btn
      large
        color="#FBBF23"
        class=" text-lowercase hoverEffect card elevation-0"
      >
       <span class="text-capitalize mr-1"> Check </span> it out
      </v-btn>
    </v-card-actions>
  </v-card>
  <v-dialog v-model="socialShareIcon" width="420" rounded="lg">
    <social-share ></social-share></v-dialog>
  
  </div>
  
</template>

<script>
import SocialShare from './SocialShare.vue';
export default {
  props: ["data"],
  name: "HomeView",

  components: {SocialShare},
  data() {
    return {
      likes: 0,
      socialShareIcon:false,
    };
  },
  methods: {
    increamentLikes() {
      this.likes++;
    },
    showSocialShare(){
      this.socialShareIcon=true
    }
  },
};
</script>

