<template>
  <div>
    <div class="advertising-brand">
      <v-img :src="getBanner"></v-img>
    </div>

    <loader :loading="loading">
      <v-container>
        <v-row class="mb-3" align="center">
          <v-col cols="12" md="5">
            <v-card class="h-100" color="rgb(243, 243, 243)">
              <v-card-text>
                <h5>{{ $t("home.search_position") }}</h5>
                <v-text-field
                  v-model="position"
                  hide-details
                  :placeholder="
                    $t('home.search_placeholder')
                  "
                  class="text-field mt-0 pt-1"
                  prepend-inner-icon="mdi-magnify"
                ></v-text-field>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col md="5" cols="12">
            <v-card color="rgb(243, 243, 243)">
              <v-card-text>
                <h5>{{ $t("home.search_position") }}</h5>
                <v-autocomplete
                  v-model="locations"
                  :items="availableLocations"
                  hide-details
                  multiple
                  chips
                  class="text-field mt-0 pt-1"
                  :placeholder="
                    $t('home.search_placeholder')
                  "
                  prepend-inner-icon="mdi-magnify"
                ></v-autocomplete>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="2" class="text-right">
            <v-btn block color="secondary" large @click="makeSearch">{{
              $t("search")
            }}</v-btn>
          </v-col>
        </v-row>

        <v-card color="rgb(243, 243, 243)">
          <v-card-text>
            <v-row class="desktop-only">
              <v-col cols="3">
                <h5>{{ $t("job_title") }}</h5>
              </v-col>
              <v-col cols="1">
                <h5>{{ $t("location") }}</h5>
              </v-col>
              <v-col cols="5">
                <h5>{{ $t("details") }}</h5>
              </v-col>
              <v-col cols="1">
                <h5>{{ $t("apply") }}</h5>
              </v-col>
              <v-col cols="2">
                <h5></h5>
              </v-col>
            </v-row>
            <JobRow v-if="firstJob" :job="firstJob" />
          </v-card-text>
        </v-card>

        <v-card
          color="rgb(243, 243, 243)"
          class="mt-5"
          v-for="job in remainingJobs"
          :key="job._id"
        >
          <v-card-text>
            <JobRow :job="job" />
          </v-card-text>
        </v-card>
      </v-container>
    </loader>
  </div>
</template>

<script>
import { locations } from "@/constants/locations";
import JobRow from "@/components/job/job-row";
import axios from "@/plugins/axios";

export default {
  // async asyncData({$messages,i18n}){
  //   const home = await $messages.find({_locale:i18n.locale})
  //   return {
  //     home
  //   }
  // },
  name: "career",
  components: { JobRow },
  data() {
    return {
      position: "",
      company: null,
      locations: [],
      loading: false,
      jobs: [],
      total: 0,
    };
  },
  computed: {
    availableLocales(){
      return this.$i18n.locales.filter(i=>i.code!==this.i18n.locale)
    }, 
    firstJob() {
      if (this.jobs.length) return this.jobs[0];
      return false;
    },
    remainingJobs() {
      if (this.jobs.length && this.jobs.length > 1) {
        const allJobs = [...this.jobs];
        allJobs.splice(0, 1);
        return allJobs;
      }
      return [];
    },
    availableLocations() {
      return ["All", ...locations];
    },
    companyName() {
       if (process.browser) {
      let company = window.location.hostname;
      if (company === "localhost") {
        company = "chi.airec.io";
      }

      return company;
       }


    },

    getBanner() {
      if(!process.client) return 'career.easytoemployee.com'

      if (this.companyName === "chi.airec.io") {
        return require("@/assets/chi-banner.jpg");
      } else {
        return require("@/assets/career-banner.jpeg");
      }
    },
  },
  methods: {
    languageChange() {
      this.switchLocalePath('ar')
      console.log('chnage')

    },
    async fetchJobs() {
      try {
        this.loading = true;
        this.$store.dispatch("FETCH_COMPANY");
        const whereHas = {
          key: "company",
          value: `url,${this.companyName}`,
        };
        // console.log('companyname',this.companyName)

        console.log('afdf')

           const resp = await axios.get(
          `/job?whereHas=${JSON.stringify(
            whereHas
          )}&w=company&status=publish&expiry=true`
        );
        console.log(resp)

        const { count, data } = resp.data;
        this.jobs = data;
        this.count = count;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
    async makeSearch() {
      try {
        this.loading = true;
        const whereIn = {
          key: "location",
          value: this.locations.join(","),
        };

        const whereHas = {
          key: "company",
          value: `url,${this.companyName}`,
        };

        let url = `/job?w=company&status=publish&expiry=true&whereHas=${JSON.stringify(
          whereHas
        )}`;

        if (this.locations.length && !this.locations.includes("All")) {
          url += `&whereIn=${JSON.stringify(whereIn)}`;
        }

        if (this.position) {
          const like = {
            key: "title",
            value: this.position,
          };
          url += `&like=${JSON.stringify(like)}`;
        }

        const resp = await this.axios.get(url);
        const { count, data } = resp.data;
        this.jobs = data;
        this.count = count;
        this.loading = false;
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },
  },
  created() {
    this.fetchJobs();

  },
};
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 0;
}

.h-100 {
  height: 100%;
}

.advertising-brand {
  margin-bottom: 1rem;
}

.desktop-only {
  @media (max-width: 769px) {
    display: none;
  }
}
</style>
