<template>
  <div>
    <div class="pt-8 px-8">
      <v-row class="justify-between">
        <v-col cols="12" lg="4" md="12" sm="12">
          <v-app-bar-nav-icon
            @click="drawer = true"
            class="hidden-md-and-up"
          ></v-app-bar-nav-icon>
          <v-toolbar-title link @click="changeRoute()">
          <img
            src="../assets/logo.svg"
            alt=""
            width="70%"
            class="mt-2 ml-8 ml-md-4 cursor-pointer"
            to="/"
          />
          </v-toolbar-title>
        </v-col>
        <v-col cols="12" lg="4" md="12" sm="12">
          <form class="search-form">
            <input
              type="search"
              value=""
              placeholder="Search"
              class="search-input"
            />
            <button  class="search-button">
              <svg class="submit-button">
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="#search"
                ></use>
              </svg>
            </button>
          </form>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            
          >
            <symbol id="search" viewBox="0 0 18 19">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.0231 8.01157C15.0231 3.86304 11.6601 0.5 7.51157 0.5C3.36304 0.5 0 3.86304 0 8.01157C0 12.1601 3.36304 15.5231 7.51157 15.5231C9.37799 15.5231 11.0854 14.8424 12.3991 13.7157L17.0136 18.3308L17.0784 18.3867C17.3046 18.5545 17.6256 18.5359 17.8308 18.3308C18.0564 18.1051 18.0564 17.7393 17.8308 17.5136L13.2157 12.8991C14.3424 11.5854 15.0231 9.87799 15.0231 8.01157ZM1.15563 8.01157C1.15563 4.50128 4.00128 1.65563 7.51157 1.65563C11.0219 1.65563 13.8675 4.50128 13.8675 8.01157C13.8675 11.5219 11.0219 14.3675 7.51157 14.3675C4.00128 14.3675 1.15563 11.5219 1.15563 8.01157Z"
                fill="#9EA2B1"
              />
            </symbol>
          </svg>
          <!-- <v-text-field dense rounded filled prepend-inner-icon="mdi-magnify"
 label="Search"></v-text-field> -->
        </v-col>
        <v-col cols="12" lg="4" md="12" sm="12" class="d-none d-md-block">
          <div class="d-flex justify-end">
            <span class="mt-2 mr-6 cursor-pointer" @click="openModal"
              >Login / Register</span
            >
            <v-btn
              large
              color="#333333"
              class="elevation-0 text-lowercase amber--text text--accent-3 px-6 py-6"
              :to="'/submitProduct'"
            >
              <span class="text-capitalize mr-1"> Submit </span> a
              product</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </div>
    <v-toolbar class="ml-0 elevation-0 hidden-sm-and-down">
      <div class="d-flex flex-wrap justify-content-between">
        <v-btn
          large
          text
          plain
          class="text-capitalize homeButton elevation-0 amber--text text--accent-3 mt-n1"
          to="/"
          >Home</v-btn
        >
        <v-menu
          offset-y
          v-for="button in buttons"
          :key="button"
          class="{ active: (button.id === activeId) }"
          click="selectMember(button.id)"
        >
          <template v-slot:activator="{ on }">
            <v-btn
              text
              plain
              v-on="on"
              class="text-capitalize elevation-0 topBar"
            >
              {{ button.title }}
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <!-- <v-list>
          <v-list-item>
            <v-list-item-title>item</v-list-item-title>
          </v-list-item>
        </v-list>
       -->
        </v-menu>
      </div>
    </v-toolbar>
    <v-navigation-drawer class="back1" width="100%" v-model="drawer" absolute temporary>
      <div class="text-right pr-4 mt-8">
      <v-btn icon class="drawer"  @click="drawer=false">
      <v-icon class="ml-auto">mdi-close</v-icon>

      </v-btn>
    </div>
     
      <v-list>
        <v-list-item v-for="button in buttons" :key="button">
          <v-list-item-title>
            <v-menu class="mx-auto topBar " offset-y>
              <template v-slot:activator="{ on }">
                <v-btn
                  text
                  v-on="on"
                  
                  class="text-capitalize elevation-0 mx-auto topBar"
                >
                  {{ button.title }}
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
            </v-menu>
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <div class="d-flex px-8">
            <div class="mt-6  text-center cursor-pointer font-weight-normal" @click="openModal"
              >Login  /  Register</div
            >
            
            <v-btn
              medium
              color="#333333"
              class="elevation-0 text-lowercase ml-auto amber--text text--accent-3 mt-4 py-6"
              :to="'/submitProduct'"
            >
              <span class="text-capitalize caption mr-1"> Submit </span> a
              product</v-btn
            >
          </div>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      dashboardButton: false,
      buttons: [
        {
          title: "Men’s Clothing",
          id: 1,
        },
        {
          title: " Women’s Clothing",
          id: 2,
        },
        {
          title: " Tech & Gadgets",
          id: 3,
        },
        {
          title: " Health & Wellness",
          id: 4,
        },
        {
          title: " Pets",
          id: 5,
        },
        {
          title: " Home Goods",
          id: 5,
        },
        {
          title: " Food & Beverage",
          id: 6,
        },
      ],
    };
  },
  methods: {
    openModal() {
      this.$emit("openDialog", true);
    },
    changeRoute() {
      this.$router.push({ path: "/" });
    },
  },
  computed: {
    computeButton() {
      if (this.$route.name === "updateProfile") {
        this.dashboardButton = true;
      }
    },
  },
};
</script>

<style scoped></style>
