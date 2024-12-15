<template>
  <v-container fluid class="pl-0 ml-0">
   
    <v-row>
      <v-col cols="12" lg="7">
        <v-row>
          <v-col cols="12" lg="6">
            <TextField :labelName="`First Name`" :modelValue="firstName" @input="newValue =>firstName = newValue"></TextField>
          </v-col>
          <v-col cols="12" lg="6">
            <TextField :labelName="`Last Name`" :modelValue="lastName" @input="newValue =>lastName = newValue"></TextField>
          </v-col>
          <v-col cols="12" lg="6">
            <TextField :labelName="`Email Address`"
            :modelValue="updateProfileData.name" @input="newValue =>updateProfileData.name = newValue"></TextField>
          </v-col>
          <v-col cols="12" lg="6">
            <TextField :labelName="`Phone Number`"
            :modelValue="updateProfileData.phone" @input="newValue =>updateProfileData.phone = newValue"></TextField>
          </v-col>
          <v-col cols="12" lg="6">
            <TextField :labelName="`Store Name`"
            :modelValue="updateProfileData.store_name" @input="newValue =>updateProfileData.store_name = newValue"></TextField>
          </v-col>
          <v-col cols="12" lg="6">
            <TextField :labelName="`Store URL`"
            :modelValue="updateProfileData.store_url" @input="newValue =>updateProfileData.store_url = newValue"></TextField>
          </v-col>
          <v-col cols="12" lg="6">
            <TextField :labelName="`Facebook URL`"
            :modelValue="updateProfileData.facebook_url" @input="newValue =>updateProfileData.facebook_url = newValue"></TextField>
          </v-col>
          <v-col cols="12" lg="6">
            <TextField :labelName="`Instagram Handle`"
            :modelValue="updateProfileData.instagram_url" @input="newValue =>updateProfileData.instagram_url = newValue"></TextField>
          </v-col>
        </v-row>
        <v-card-actions class="pl-0">
          <v-btn
            large
            color="#FBBF23"
            class="text-capitalize elevation-0 userProfile py-2"
            @click="updateProfile"
          >
            update profile
          </v-btn>
          <div class="subtitle-2 ml-16 mt-2">Reset</div>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TextField from "./TextField.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    TextField,
  },
  data() {
    return {
        firstName:"waqar",
        lastName:'shams',
        updateProfileData:{
            name:'',
            phone: "",
            store_name: "",
            store_url: "",
            instagram_url: "",
            facebook_url:''
            

        }
    //   : {name: "",
    //   phone: "",
    //     
    //     store_url: "",
    //     instagram_url: "",
    //     facebook_url,
    //   },
    };
  },
  methods: {
    ...mapActions(["update_profile"]),
    updateProfile() {
      this.update_profile(this.updateProfileData)
        .then((response) => {
          if (response.data.errors) {
            alert(response);
            setTimeout(() => {
              // this.errors = {};
            }, 5000);
          } else {
            
            this.$emit("requestStatus", response);
            // this.loading = false;
          }
        })
        .finally(() => {
          // this.$emit("overlay", false);
        });
    },
  },
};
</script>

<style scoped></style>
