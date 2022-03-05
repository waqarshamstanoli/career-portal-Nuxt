<template>
  <v-app>

     <v-app-bar app color="#fff">
       <img
        :src="getLogo"
        class="img-fluid logo-img"
        alt=""
        v-if="!$store.state.company"
        @click="$router.push('/')"
      /> 

      <h1 class="brand primary--text mr-5" v-else @click="$router.push('/')">
        {{ $store.state.company.name }}
      </h1>

      <p class="find-job mb-0 mx-3">
        {{ $t("find_jobs") }}
      </p>

      <v-spacer></v-spacer>

      <div class="mx-4 language-dropdown">
        <v-select
          hide-details
          :items="languages"
          @change="languageChange"
        ></v-select>
      </div>
    </v-app-bar>
    <v-main>
      <!-- <v-container fluid> -->
        <Nuxt />
      <!-- </v-container> -->
    </v-main>
    <!-- <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
     <v-footer padless relative>
      <v-col class="text-center d-flex justify-center align-center" cols="12">
        <p class="mb-0" style="font-weight: bold">
          {{ $t("powered_by") }}
        </p>
        <img src="@/assets/logo.png" class="img-fluid logo-img" alt="" />
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      languages: [
      { text: "English | en", value: "en", rtl: false, },
      { text: "Arabic | ar", value: "ar", rtl: true },
    ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  methods:{
    languageChange() {
      console.log('chnage')
      to="switchLocalePath('ar')"
    },
  },
  computed: {
    companyName() {
      let company = 'career.easy2employ.com';

      if(process.client){
        window.location.hostname

        if (company === "localhost") {
          company = "career.easy2employ.com";
        }
      }

      return company;
    },

    getLogo() {
      if (this.comapnyName === "evampsanga.airec.io") {
        console.log("TRUE CASE", this.companyName);
        return require("@/assets/evamp-&-saanga_logo.png");
      } else {
        console.log("FALSE CASE", this.companyName);
        return require("@/assets/logo.png");
      }
    },
  },
}
</script>

<style lang="scss">
.img-fluid {
  max-width: 100%;
  height: auto;
}

.logo-img {
  width: 100px;
  max-height: 100%;
  margin-right: 2rem;
  margin-left: 1rem;
  cursor: pointer;
}
.find-job {
  font-weight: 500;
  border-bottom: 2px solid #33aada;
  padding-bottom: 3px;
  margin-bottom: 0;

  @media (max-width: 769px) {
    display: none;
  }
}

.v-application {
  .v-btn {
    text-transform: capitalize;
    letter-spacing: 0;
  }

  .h-100 {
    height: 100%;
  }
}

.brand {
  cursor: pointer;
}
</style>
