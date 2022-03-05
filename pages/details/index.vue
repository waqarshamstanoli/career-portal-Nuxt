<template>
  <loader :loading="loading">
    <v-container>
      <v-btn @click="$router.back()" color="secondary" class="mb-2">
        {{ $t("back") }}
      </v-btn>
      <v-flex v-if="!loading" sm12 md12>
        <v-card class="mt-2 jobs-card" flat>
          <div class="jobs-title">
            <div class="sub-header">
              <h3 class="">{{ job.title }}</h3>
              <span class="text-sm-left ml-0 pl-0 clear">
                <v-icon class="mr-1">mdi-map-marker </v-icon>
                {{ job.location }}
              </span>
            </div>
            <div>
              <div v-if="job.referal">
                <v-btn
                  class="secondary"
                  :to="{
                    name: 'apply-job',
                    params: { id: job._id },
                    query: { emp_id: job.referal, platform: job.platform },
                  }"
                >
                  {{ $t("apply_now") }}
                </v-btn>
              </div>
              <div v-else>
                <v-btn
                  dark
                  class="secondary"
                  :to="{ name: 'apply-job', params: { id: job._id } }"
                >
                  {{ $t("apply_now") }}
                </v-btn>
              </div>
            </div>
          </div>

          <v-card-text class="px-0">
            <v-layout row>
              <v-flex xs12 sm11 class="px-3 py-1">
                <span class="ml-0 pl-0 clear" v-if="job.end_date">
                  <v-icon class="mr-1">mdi-calendar-today </v-icon>
                  Apply before {{ job.end_date | dateFilter }}
                </span>
                <span class="ml-0 pl-4 clear" disabled flat>
                  <v-icon class="mr-1">mdi-timelapse </v-icon>
                  {{ job.job_type | jobType }}
                </span>
                <span class="ml-0 pl-4 clear" disabled flat>
                  <v-icon class="mr-1">mdi-cash-100 </v-icon>
                  {{ job.salary || $t("negotiable") }}
                </span>
              </v-flex>
              <v-flex v-if="job.link">
                <v-tooltip bottom class="text-xs-right">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="text-xs-right"
                      icon
                      slot="activator"
                      v-clipboard="job.link"
                      v-clipboard:success="clipboardSuccessHandler"
                      v-clipboard:error="clipboardErrorHandler"
                    >
                      <v-icon color="blue">mdi-clipboard-text </v-icon>
                    </v-btn>
                  </template>

                  <span> {{ $t("copy_text") }} </span>
                </v-tooltip>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
        <v-card v-if="job" flat style="background: #ffffff">
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs12 class="px-3" v-html="job.description"></v-flex>
              <v-flex xs12 class="mt-5">
                <v-layout
                  row
                  class="py-3 text-xs-center"
                  justify-center
                  align-center
                >
                  <div v-if="job.referal">
                    <v-btn
                      dark
                      class="secondary"
                      :to="{
                        name: 'apply-job',
                        params: { id: job._id },
                        query: { emp_id: job.referal, platform: job.platform },
                      }"
                    >
                      {{ $t("apply_now") }}
                    </v-btn>
                  </div>
                  <div v-else>
                    <v-btn
                      dark
                      class="secondary"
                      :to="{ name: 'apply-job', params: { id: job._id } }"
                    >
                      {{ $t("apply_now") }}
                    </v-btn>
                  </div>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-container>
  </loader>
</template>

<script>
import axios from "@/plugins/axios";

export default {
  name: "job-details",
  data() {
    return {
      job: {},
      metaDesc: null,
      loading: false,
    };
  },
  metaInfo() {
    return {
      title: this.job.title,
      meta: [
        { name: "description", content: this.job.metaDesc },
        { property: "og:title", content: this.job.title },
      ],
    };
  },
  methods: {
    async fetchJob() {
      try {
        // this.loading = true;
        const resp = await axios.get(
          `/job/${this.$route.params.id}?w=company`
        );
        const job = resp.data;
        this.job = job;
        this.job.metaDesc = job.description.replace(/<\/?[^>]+(>|$)/g, "");
        this.job.referal = new URL(location.href).searchParams.get("emp_id");
        this.job.platform = new URL(location.href).searchParams.get("platform");

        if (!this.job.link) {
          this.job.link = "No Job Link Exists";
        }
        this.loading = false;
      } catch (error) {
        console.log(error);
        this.laoding = false;
      }
    },
    clipboardSuccessHandler() {
      this.$notify({
        group: "backend-error",
        title: "Link Copied!",
        text: "Link Copied Successfully.",
        type: "success",
        duration: 5000,
      });
    },
    clipboardErrorHandler() {
      this.$notify({
        group: "backend-error",
        title: "Some Error",
        text: "Something Went wrong while copying the link",
        type: "error",
        duration: 5000,
      });
    },
  },
  created() {
    this.fetchJob();
  },
};
</script>

<style lang="scss" scoped>
.jobs-description-container {
  margin-top: 65px !important;

  .no_underline {
    text-decoration: none !important;
  }
  .jobs-card {
    border: 1px solid #e6e6f1;
    background: #f7f7f7;
    .jobs-title {
      justify-content: space-between;
    }
  }
  .clear {
    background: transparent !important;
    color: #7f828f !important;
  }
  .chip__content {
    padding: 0px !important;
  }
}

.jobs-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.jobs-card {
  border: 1px solid #e6e6f1;
  background: #f7f7f7;
  padding: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 0.1rem;
}
</style>
