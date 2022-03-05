<template>
  <loader :loading="loading">
    <v-container>
      <v-btn @click="$router.back()" color="secondary" class="mb-2">
        {{ $t("back") }}
      </v-btn>

      <v-card class="jobs-card mt-2 mb-0" flat>
        <div class="jobs-title">
          <div class="sub-header">
            <h3 class="">{{ job.title }}</h3>
            <span class="text-sm-left ml-0 pl-0 clear">
              <v-icon class="mr-1">mdi-map-marker </v-icon>
              {{ job.location }}
            </span>
          </div>
        </div>

        <v-card-text class="px-0">
          <v-layout row>
            <v-flex xs12 sm11 class="px-3 py-1">
              <span class="ml-0 pl-0 clear" v-if="job.end_date">
                <v-icon class="mr-1">mdi-calendar-today </v-icon>
                {{ $t("apply_before") }}
                {{ job.end_date | dateFilter }}
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
          </v-layout>
        </v-card-text>
      </v-card>

      <v-layout class="apply-form-container monteserrat">
        <v-flex v-if="!loading">
          <v-card v-if="job.title">
            <v-form
              class="py-5 px-5"
              v-on:submit.prevent="applyForJob"
              v-model="valid"
            >
              <h3>
                {{ $t("apply_job.apply_for_job") }}:
              </h3>

              <v-row>
                <v-col cols="6" class="pb-0">
                  <v-text-field
                    :label="$t('f_name')"
                    v-model="candidate.first_name"
                    :rules="fieldRules"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6" class="pb-0">
                  <v-text-field
                    :label="$t('l_name')"
                    v-model="candidate.last_name"
                    :rules="fieldRules"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="4" class="pb-0">
                  <v-text-field
                    :label="$t('email')"
                    v-model="candidate.email"
                    :rules="emailRules"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="4" class="pb-0">
                  <v-text-field
                    :label="$t('phone')"
                    v-model="candidate.phone"
                    :rules="fieldRules"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="4" class="pb-0">
                  <v-text-field
                    :label="$t('experience')"
                    v-model="candidate.experience"
                    :rules="fieldRules"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-flex style="min-height: 120px" class="my-5">
                <v-layout xs12 row wrap>
                  <v-flex sm6 xs12 class="pa-1">
                    <p class="my-1">
                      CV/ Resume
                      <span class="sm" style="font-size: 12px"
                        >(doc, docx, pdf )</span
                      >
                    </p>
                    <div class="dropbox image-upload text-sm-center">
                      <label for="file-input">
                        <v-icon
                          class="pointer"
                          color="secondary"
                          slot="activator"
                          >mdi-cloud-upload</v-icon
                        >
                        <h3 class="text-lightblue pointer">
                          {{ $t("click_here") }}
                        </h3>
                      </label>

                      <input
                        v-on:change="setFile('cv')"
                        ref="cv"
                        id="file-input"
                        type="file"
                      />
                    </div>
                    <div v-if="cv_name" class="file-uploaded my-2 cv">
                      <v-icon class="pdf_icon" color="error"
                        >mdi-file-pdf-box
                      </v-icon>
                      {{ cv_name | limitChar }}
                      <v-btn icon @click="remove('cv')"
                        ><v-icon>mdi-close-circle-outline </v-icon></v-btn
                      >
                    </div>
                  </v-flex>
                  <v-flex sm6 xs12 class="pa-1">
                    <p class="my-1">
                      {{ $t("cover_letter") }}
                    </p>
                    <div class="dropbox image-upload text-sm-center">
                      <label for="file-cl">
                        <v-icon
                          class="pointer"
                          color="secondary"
                          slot="activator"
                          >mdi-cloud-upload</v-icon
                        >
                        <h3 class="text-lightblue pointer">
                          {{ $t("click_here") }}
                        </h3>
                      </label>

                      <input
                        v-on:change="setFile('cl')"
                        id="file-cl"
                        ref="coverLetter"
                        type="file"
                      />
                    </div>
                    <div v-if="coverLetter" class="file-uploaded my-2 cl">
                      <v-icon class="pdf_icon" color="error"
                        >mdi-file-pdf-box
                      </v-icon>
                      {{ coverLetter | limitChar }}
                      <v-btn icon @click="remove('cl')"
                        ><v-icon>mdi-close-circle-outline </v-icon></v-btn
                      >
                    </div>
                  </v-flex>
                </v-layout>
              </v-flex>

              <div
                v-if="job.questions && job.questions.length > 0"
                class="mt-4"
              >
                <h3>{{ $t("questions") }}</h3>
                <div class="mt-3" v-for="q in job.questions" :key="q._id">
                  <label class="">{{ q.question }}</label>
                  <v-text-field
                    class="pt-0"
                    v-model="q.answer"
                    v-bind:rules="q.required ? fieldRules : []"
                    v-bind:required="q.required ? true : false"
                    hide-details
                  ></v-text-field>
                </div>
              </div>

              <div class="text-center">
                <v-btn
                  type="submit"
                  class="mt-4 px-10"
                  color="secondary"
                  :loading="applying"
                  :disabled="applying"
                >
                  {{ $t("apply") }}
                </v-btn>
              </div>
            </v-form>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container> -->
  </loader>
</template>

<script>
import { validateEmail } from "@/helpers";
import axios from "@/plugins/axios";

export default {
  name: "apply-job",
  data() {
    return {
      loading: false,
      applying: false,
      job: {},
      valid: false,
      candidate: {},
      alert_error: false,
      alert_success: false,
      alert_text: null,
      fieldRules: [(v) => !!v || "Field is required"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => validateEmail(v) || "Email is Invalid",
      ],
      coverLetter: null,
      cv_name: "",
      submitApp: false,
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
        console.log(job);
        this.loading = false;
      } catch (error) {
        console.log(error);
        this.laoding = false;
      }
    },
    setData() {
      const data = new FormData();
      let emp_id = new URL(location.href).searchParams.get("emp_id");
      let platform = new URL(location.href).searchParams.get("platform");

      if (emp_id) {
        data.append("emp_id", emp_id);
      }
      if (platform) {
        data.append("platform", platform);
      }
      data.append("first_name", this.candidate.first_name);
      data.append("last_name", this.candidate.last_name);
      data.append("phone", this.candidate.phone);
      data.append("email", this.candidate.email);
      data.append("cv", this.candidate.cv);
      data.append("coverLetter", this.candidate.coverLetter);
      data.append("questions", JSON.stringify(this.job.questions));
      data.append("jobPostId", this.$route.params.id);
      data.append("source", "website");
      return data;
    },
    setFile(type) {
      const legalExtensions = ["doc", "docx", "pdf"];

      if (type == "cv") {
        const file = this.$refs.cv.files[0];
        const arr = file.name.split(".");
        const extension = arr[arr.length - 1];

        if (!legalExtensions.includes(extension)) {
          this.showError("Please Insert the valid file");
          return;
        }
        this.candidate.cv = file;
        this.cv_name = file.name;
      }

      if (type == "cl") {
        const file = this.$refs.coverLetter.files[0];
        const arr = file.name.split(".");
        const extension = arr[arr.length - 1];
        if (!legalExtensions.includes(extension)) {
          this.showError("Please Insert the valid file");
          return;
        }

        this.candidate.coverLetter = file;
        this.coverLetter = file.name;
      }
    },
    remove(type) {
      if (type == "cv") {
        this.candidate.cv = null;
        this.cv_name = null;
      }
      if (type == "cl") {
        this.candidate.coverLetter = null;
        this.coverLetter = null;
      }
    },
    async applyForJob() {
      if (!this.valid) {
        this.showError("Missing Data");
        return;
      }
      if (!this.candidate.cv) {
        this.showError("Please Attach Resume!");
        return;
      }

      try {
        this.applying = true;
        const payload = this.setData();
        const resp = await this.axios.post("/application", payload, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });

        this.$notify({
          group: "backend-error",
          title: "Success...!",
          text: "Successfully Applied",
          type: "success",
          duration: 5000,
        });

        this.$router.push("/");
        this.applying = false;

        await this.axios.post("/calculate/ai_score", {
          application_id: resp.data.application._id,
        });
      } catch (error) {
        this.applying = false;
        console.log(error);
      }
    },
    showError(text) {
      this.$notify({
        group: "backend-error",
        title: "Error",
        text,
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
.jobs-card {
  border: 1px solid #e6e6f1;
  background: #f7f7f7;
  padding: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 0.1rem;
}

.apply-form-container {
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
  .dropbox {
    border: 2px dashed #829299;
    background-color: #f7f7f7;
    min-height: 100px;
    max-height: 120px;
  }
  .image-upload > input {
    display: none;
  }
  .image-upload {
    margin: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pointer {
    cursor: pointer;
  }
  .file-uploaded {
    justify-content: space-between;
    display: flex;
    align-items: center;
    border: 1px solid #e3e9ed;
    .pdf_icon {
      font-size: 40px;
      color: #da2c2c;
    }
  }
}
</style>
