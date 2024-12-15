<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="7">
        <v-row>
          <v-col cols="12" lg="6">
            <TextField
              :inputType="`password`"
              :labelName="`Current Password`"
              :modelValue="changePasswordData.currentpassword"
              @input="
                (newValue) => (changePasswordData.currentpassword = newValue)
              "
            ></TextField>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" lg="6">
            <TextField
              :inputType="`password`"
              :labelName="`New Password`"
              :modelValue="changePasswordData.password"
              @input="(newValue) => (changePasswordData.password = newValue)"
            ></TextField>
          </v-col>
          <v-col cols="12" lg="6">
            <TextField
              :inputType="`password`"
              :labelName="`Confirm New Password`"
              :modelValue="confirmPassword"
              @input="(newValue) => (confirmPassword = newValue)"
            ></TextField>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-card-actions>
      <v-btn
        large
        color="#FBBF23"
        class="text-capitalize elevation-0 userProfile py-2"
        @click="changePassword"
      >
        save changes
      </v-btn>
      <div class="subtitle-2 ml-16 mt-2">Reset</div>
    </v-card-actions>
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
      confirmPassword: "",
      changePasswordData: {
        currentpassword: "",
        newPassword: "",
      },
    };
  },
  methods: {
    ...mapActions(["update_password"]),
    changePassword() {
      this.update_password(this.changePasswordData)
        .then((response) => {
          if (response.data.errors) {
            alert(response);
            setTimeout(() => {
              // this.errors = {};
            }, 5000);
          } else {
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
