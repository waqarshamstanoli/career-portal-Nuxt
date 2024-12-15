<template>
  <div class="dashboard-layout">
    <div class="">
      <Top-bar @openDialog="userModal = true"></Top-bar>

      <dashboard-content></dashboard-content>

      <Footer class="mt-8"></Footer>
    </div>

    <v-dialog v-model="userModal" max-width="400">
      <v-card class="card-shadow pb-8 px-4 rounded mt-2">
        <v-card-text class="pb-0">
          <div class="d-flex justify-space-between pt-5"></div>
          <v-card-title class="text--h5 justify-center pb-2"
            >Create an account</v-card-title
          >
          <div class="body-1 text-center">
            Create an account and submit your <br />
            products for our visitors to discover!
          </div>

          <TextField
            outlined
            dense
            :labelName="`Email`"
            :modelValue="signUpData.email"
            @input="(newValue) => (signUpData.email = newValue)"
            class="mt-10"
          >
          </TextField>

          <TextField
            outlined
            dense
            :inputType="`password`"
            :labelName="`Password`"
            :modelValue="signUpData.password"
            @input="(newValue) => (signUpData.password = newValue)"
            class=""
          >
          </TextField>
        </v-card-text>
        <v-card-actions>
          <v-btn
            block
            color="#333333"
            class="text-capitalize elevation-0 mx-auto amber--text text--accent-3 px-6 py-6"
            @click="signUp('waqar')"
            >Create Account</v-btn
          >
        </v-card-actions>
        <div class="subtitle text-center mt-10">
          Already have an account?
          <span
            class="cursor-pointer text-decoration-underline"
            @click="showLogin"
            >Sign In</span
          >
        </div>
      </v-card>
    </v-dialog>
    <v-dialog v-model="loginModal" max-width="400">
      <v-card class="card-shadow pb-8 px-4 rounded mt-2">
        <v-card-text class="pb-0">
          <div class="d-flex justify-space-between pt-5"></div>
          <v-card-title class="text--h5 justify-center pb-2"
            >Welcome back!</v-card-title
          >
          <div class="body-1 text-center">
            Showcase your products to our audience of over 1 million monthly
            visitors!
          </div>
          <TextField
            outlined
            dense
            :labelName="`Email`"
            :modelValue="loginData.email"
            @input="(newValue) => (loginData.email = newValue)"
            class="mt-10"
          >
          </TextField>

          <TextField
            outlined
            dense
            :inputType="`password`"
            :labelName="`Password`"
            :modelValue="loginData.password"
            @input="(newValue) => (loginData.password = newValue)"
            class=""
          >
          </TextField>
        </v-card-text>
        <v-card-actions>
          <v-btn
            block
            color="#333333"
            class="text-capitalize elevation-0 mx-auto amber--text text--accent-3 px-6 py-6"
            @click="login"
            >Continue</v-btn
          >
        </v-card-actions>
        <div
          class="subtitle text-center mt-8 cursor-pointer"
          @click="showForgotPassword"
        >
          Forgot Password?
        </div>
        <div class="subtitle text-center mt-2">
          Don’t have an account yet?
          <span
            class="cursor-pointer text-decoration-underline"
            @click="showSignup"
          >
            Sign Up
          </span>
        </div>
      </v-card>
    </v-dialog>
    <v-dialog v-model="forgotPasswordModal" max-width="400">
      <v-card class="card-shadow pb-8 px-4 rounded mt-2">
        <v-card-text class="pb-0">
          <div class="d-flex justify-space-between pt-5"></div>
          <v-card-title class="text--h5 justify-center pb-2"
            >Forgot password?</v-card-title
          >
          <div class="body-1 text-center">
            Don’t worry, it happens! Just enter your email and if we have a
            record on file we’ll send a password reset link.
          </div>
          <TextField outlined dense :labelName="`Email`" class="mt-10">
          </TextField>
        </v-card-text>
        <v-card-actions>
          <v-btn
            block
            color="#333333"
            class="text-capitalize elevation-0 mx-auto amber--text text--accent-3 px-6 py-6"
            >Submit</v-btn
          >
        </v-card-actions>
        <div class="subtitle text-center mt-10">
          Don’t have an account yet?
          <span
            class="cursor-pointer text-decoration-underline"
            @click="showSignup"
          >
            Sign Up
          </span>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import DashboardContent from "../components/ContentView.vue";
import TopBar from "../layouts/TopBar.vue";
import TextField from "../components/TextField.vue";
import Footer from "./Footer.vue";
import { mapActions } from "vuex";

export default {
  components: {
    DashboardContent,
    TopBar,
    TextField,
    Footer,
  },

  data() {
    return {
      toggle: true,
      userModal: false,
      loginModal: false,
      forgotPasswordModal: false,
      showDialog: false,
      signUpData: { email: "", password: "" },
      loginData: { email: "", password: "" },
    };
  },
  methods: {
    ...mapActions(["registerUser", "loginUser"]),
    signUp() {
      this.registerUser(this.signUpData)
        .then((response) => {
          if (response.data.errors) {
            // alert(response);
            setTimeout(() => {
              // this.errors = {};
            }, 5000);
          } else {
            localStorage.setItem("access_token", response.data.token);
            // this.loading = false;
            this.$emit("requestStatus", response.data.msg);
          }
        })
        .finally(() => {
          // this.$emit("overlay", false);
        });
    },
    login() {
      this.loginUser(this.loginData)
        .then((response) => {
          if (response.data.errors) {
            alert(response);
            setTimeout(() => {
              // this.errors = {};
            }, 5000);
          } else {
            // this.loading = false;
            this.$emit("requestStatus", response.data.msg);
            localStorage.setItem("access_token", response.data.token);
            if(response.data.user.role==='admin'){
              localStorage.setItem("roleAdmin", response.data.user.role);
              this.$router.push({name:'admin'})
            }
          }
        })
        .finally(() => {
          // this.$emit("overlay", false);
        });
    },
    showLogin() {
      this.userModal = false;
      this.loginModal = true;
      this.forgotPasswordModal = false;
    },
    showSignup() {
      this.userModal = true;
      this.loginModal = false;
      this.forgotPasswordModal = false;
    },

    showForgotPassword() {
      this.userModal = false;
      this.loginModal = false;
      this.forgotPasswordModal = true;
    },
  },
};
</script>

<style lang="scss">
.v-btn {
  border-radius: 8px !important;
  box-shadow: 0px !important;
  font-size: 1rem !important;
  font-weight: 500 !important;
  letter-spacing: 0em !important;
  // color: black !important;
}
.userProfile.v-btn {
  width:139px !important;
}
.homeButton.v-btn {
  font-size: 18px !important;
}
.homeButton.v-btn:hover{
  background-color: transparent !important;
}
.payment.v-btn {
  width:150px !important;
}
.card.v-btn {
  width:143px !important;
}
.submit.v-btn {
  width:145px !important;
}
.delete.v-btn {
  width:100px !important;
  height:40px !important;
}
.submitProduct.v-btn {
  width:177px !important;
 
}
.delete.v-btn:hover {
  background-color: transparent !important;
}
.v-btn--rounded {
  border-radius: 20px !important;
}
.pricing.v-btn--rounded {
  border-radius: 45px !important;
  color:#333333 !important;
  font-weight: 700 !important;
}
.v-btn.v-size--large {
  
  
}
.v-btn:hover {
  background: #5c5c5c !important;
}
.hoverEffect.v-btn:hover {
  background: #e2ac20 !important;
}
.v-btn__content:hover {
  background: transparent !important;
}
.topBar.v-btn.v-size--default {
  font-weight: 500 !important;
  padding-right: 0px !important;
  color: black !important;
  
}
.v-btn--plain:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover) .v-btn__content {
    opacity: 1 !important;
}
.topBar.v-btn__content {
  color: #000000 !important;
}
.topBar.v-btn:hover {
  background: transparent !important;
  color: #fbbf23 !important;
}
.topBar.v-btn:focus {
  background: transparent !important;
  color: #fbbf23 !important;
}
.drawer.v-btn:focus {
  background: transparent !important;
  color: #fbbf23 !important;
}

.cancel.v-btn__content {
  color: white !important;
  padding-right: 0px !important;
}
.topBar.v-menu__content {
  border-radius: 8px !important;
  box-shadow: none !important;
  background-color: transparent !important;
  
}
.mdi-menu {
  margin-top: 70px !important;
  margin-right: 20px;
}
.cursor-pointer {
  cursor: pointer;
}
.cursor-pointer:hover {
  color: #fbbf23;
}

.cardImage{
  border-top-right-radius: 0px !important;
      border-top-left-radius: 0px !important;

}

.v-slider__thumb {
  border: 1.5px solid #d9dbe9 !important;
}

// TEXT
.text-decoration-underline:hover {
  color: #fbbf23;
}
.v-application .text--h2 {
  font-size: 54px !important;
  font-family: "Merienda";
  color: black;
}
.v-application .text--h3 {
  font-size: 50px !important;
  font-family: "Merienda";
  color: black;
}
.v-application .text--h4 {
  font-size: 32px !important;
  font-family: "Merienda";
  color: black;
}
.v-application .text--h5 {
  font-size: 28px !important;
  font-family: "Merienda";
  font-weight: 700 !important;
  color: black;
}

.v-application .text--h6 {
  font-size: 18px !important;
  font-family: "Merienda";
  color: black;
}
.v-application .text--h1 {
  font-size: 40px !important;
  font-weight: 700 !important;
  font-family: "Merienda";
  color: black;
}
.v-application .body-1 {
  font-family: "Merienda" !important;
  color: black;
}
.fmMerinada {
  font-family: "Merienda" !important;
}
.v-card__title {
  font-family: "Merienda" !important;
  color: black;
}
.rounded.v-sheet.v-card {
  border-radius: 8px !important;
}

.custom.v-label {
  color: black !important;
}

.v-slider--horizontal .v-slider__track-fill {
  height: 10px !important;
  border-radius: 8px !important;
}
.v-slider--horizontal .v-slider__track-background,
.v-slider--horizontal .v-slider__track-fill {
  height: 10px !important;
  border-radius: 8px !important;
}
.v-slider__thumb {
  width: 23px !important;
  height: 23px !important;
  background-color: #d9dbe9 !important;
}
.sliderThumb {
  color: black;
  font-size: 22px;
  font-weight: 700;
  background-color: #fbbf23;
  width: 81px;
  height: 43px;
  border-radius: 20px;
  text-align: center;
  padding-top: 5px;
  margin-bottom: 60px;
}
.v-tabs-slider {
  background-color: transparent !important;
  height: 100%;
  width: 20px !important;
}
.v-tab--active {
  background-color: #333333;
  border-radius: 8px;
  color: #ffc400 !important;
}
.v-tab {
  max-width: 120px !important;
  padding-right: 32px !important;
  padding-left: 0px !important;
}

.v-text-field--outlined .v-label {
  top: 15px !important;
}
// .v-text-field--rounded {
//     border-radius: 8px !important;

// }
/* .v-input__slot {
    border: gray 1px solid !important;
} */
.leftCard {
  // border-top-right-radius: 18px !important;
  //         border-bottom-right-radius: 18px !important;
}
.rightCard {
  border-top-right-radius: 18px !important;
  border-bottom-right-radius: 18px !important;
}
.v-input input {
  max-height: 50px !important;
  // color: red !important;
}
/* v-input__slot */
.fileInput {
  height: 202px;
  width: 345px;
  border: 1px solid #E0E4EC;
  border-radius: 8px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 10px;
}

.fileInputSm {
  height: 202px;
  width: 275px;
  border: 1px solid gray;
  border-radius: 8px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 10px;
}
.bg-red {
  background-color: red;
}
.bg-green {
  background-color: green;
}
label {
  font-size: 16px !important;
  font-weight: 400;
  color: #9ea2b1 !important;
}
::placeholder {
  font-size: 16px !important;
  font-weight: 400;
  color: #9ea2b1 !important;
}
.v-text-field--outlined > .v-input__control > .v-input__slot {
  align-items: stretch;
  min-height: 50px !important;
}
.paymentMethod {
  width: 100%;
  height: 145px;
  border: 1px solid gray;
  border-radius: 8px;
  padding: 20px;
}
// .v-btn--outlined{
//   color: red !important;

// }
@font-face {
  font-family: "Merienda";
  src: local("Merienda"),
    url(../assets/DM_Sans/DMSans-Regular.ttf) format("truetype");
}
.fmDMSans{
  font-family: "Merienda";
}
body{
  font-family: "Merienda";
}
.v-application {
  font-family: "Merienda";
}
.btnDiv {
  min-width: 118px;
  max-width: 118px;
}
.btnDiv:hover {
  background-color: unset !important;
}

.v-icon .notranslate .mdi .mdi-checkbox-marked-circle {
  color: green !important;
}

.v-application .body-1 {
  font-size: 1rem !important;
  font-weight: 400;
  letter-spacing: 0.03em !important;
  line-height: 1.5rem;
  font-family: "Roboto", sans-serif !important;
}
controls__ripple:before {
  opacity: 0 !important;
}
.mdi-checkbox-marked-circle.v-icon {
  color: #34c759 !important;
}
.mdi-close.v-icon:focus{
  color:#34c759 !important
}
.v-stepper__step__step .primary__span{
  background-color: #000000 !important;
}

// .theme--light.v-list {
//     background: red !important;
//     color: rgba(0, 0, 0, 0.87);
//   box-shadow: 0px  0px 0px 0px !important;

// }

// input:hover + label,
// input:focus + label {
//   transform: scale(1.02);
// }

/* Adding an outline to the label on focus */
// input:focus + label {
//   outline: 1px solid #000;
//   outline: -webkit-focus-ring-color auto 2px;
// }
s {
  color: red;
  height: 120px;
}


.v-textarea textarea {
    align-self: stretch;
    flex: 1 1 auto;
    line-height: 0.8rem !important;
    max-width: 100%;
    min-height: 32px;
    outline: none;
    padding: 0;
    width: 100%;
}


.search-form {
  position: relative;
  top: 30%;
  left: 50%;
  width: 100%;
  height: 45px;
  border-radius: 8px;
  // border:1px solid black;
  transform: translate(-50%, -50%);
  background: #F3F3F3;
  transition: all 0.3s ease;

  &.focus {
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
  }
}

.search-input {
  position: absolute;
  top: 0px;
  left: 48px;
  font-size: 18px;
  font-weight: 400;
  background: none;
  color: #000000;
  width: 90%;
  height: 45px;
  border: none;
  appearance: none;
  outline: none;

  &::-webkit-search-cancel-button {
    appearance: none;
  }
}

.search-button {
  position: absolute;
  top: 12px;
  left: 15px;
  height: 20px;
  width: 20px;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  outline: none!important;
  cursor: pointer;
  pointer-events: none;
  
  & svg {
    width: 20px;
    height: 20px;
    fill: #9ea2b1;
  }
}

.search-option {
  position: absolute;
  text-align: right;
  top: 10px;
  right: 15px;

  div {
    position: relative;
    display: inline-block;
    margin: 0 1px;
    cursor: pointer;
    
    
    
    
    
   
    
    
    
    
    
  }


}

.card-actions {
  position: absolute;
  width:86%;
  bottom: 0;
}
.socialShareCard{
  background-color: #fff !important;
  border-radius: 10px 50px 20px 20px !important;
  padding: 40px !important;
  margin-top: 40px;
}
.likeImage{
  position: absolute;
  left: -100px;
  margin-top: -25px;
  z-index: 1000;
}
</style>
