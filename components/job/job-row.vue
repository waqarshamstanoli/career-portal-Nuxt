<template>
  <div>
    <div class="job-row">
      <v-row>
        <v-col cols="3">
          <h3>{{ job.title }}</h3>
        </v-col>
        <v-col cols="1">
          <p>{{ job.location }}</p>
        </v-col>
        <v-col cols="5">
          <p>
            {{ extractDescription(job.description) }}

            <span
              class="secondary--text cursor-pointer"
              @click="openDescription = true"
            >
              {{ $t("read_more") }}
            </span>
          </p>
        </v-col>
        <v-col cols="1">
          <v-btn :to="`/apply/${job._id}`" color="secondary">
            {{ $t("apply") }}
          </v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn outlined color="accent" class="mx-2" :to="`/details/${job._id}`">{{
            $t("details")
          }}</v-btn>

          <v-menu bottom origin="center center" transition="scale-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn outlined color="accent" v-bind="attrs" v-on="on">
                <v-icon>mdi-share</v-icon>
              </v-btn>
            </template>

            <div class="socials">
              <p class="sm">{{ $t("share_job_on") }}</p>
              <div class="lists">
                <div
                  class="lists-item"
                  v-for="social in socials"
                  :key="social.title"
                  @click="social.action"
                  v-ripple
                >
                  <v-icon class="lists-item--icon">{{ social.icon }}</v-icon>
                  <p class="lists-item--title">{{ social.title }}</p>
                </div>
              </div>
            </div>
          </v-menu>
        </v-col>
      </v-row>
    </div>
    <div class="job-card">
      <h3 class="mb-2">{{ job.title }}</h3>

      <div class="location mb-2">Location: {{ job.location }}</div>
      <div class="description mb-2">
        <p>
          {{ extractDescription(job.description) }}

          <span
            class="secondary--text cursor-pointer"
            @click="openDescription = true"
          >
            {{ $t("read_more") }}
          </span>
        </p>
      </div>
      <div class="links mb-2">
        <v-btn :to="`/apply/${job._id}`" color="secondary">
          {{ $t("apply") }}
        </v-btn>

        <v-btn outlined color="accent" class="mx-2" :to="`/job/${job._id}`">{{
          $t("details")
        }}</v-btn>

        <v-menu bottom origin="center center" transition="scale-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn outlined color="accent" v-bind="attrs" v-on="on">
              <v-icon>mdi-share</v-icon>
            </v-btn>
          </template>

          <div class="socials">
            <p class="sm">{{ $t("share_job_on") }}</p>
            <div class="lists">
              <div
                class="lists-item"
                v-for="social in socials"
                :key="social.title"
                @click="social.action"
                v-ripple
              >
                <v-icon class="lists-item--icon">{{ social.icon }}</v-icon>
                <p class="lists-item--title">{{ social.title }}</p>
              </div>
            </div>
          </div>
        </v-menu>
      </div>
    </div>
    <div class="details">
      <div class="details-item">
        <v-icon>mdi-clock</v-icon>
        <p>{{ job.job_type | jobType }}</p>
      </div>
      <div class="details-item">
        <v-icon>mdi-cash-multiple </v-icon>
        <p>{{ job.salary || $t("negotiable") }}</p>
      </div>
    </div>

    <v-dialog v-model="openDescription" max-width="600px">
      <v-card>
        <v-card-title>
          {{ $t("job_details") }}
        </v-card-title>
        <v-card-text>
          <p v-html="job.description"></p>
        </v-card-text>

        <v-card-actions class="pb-10">
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            text
            @click="openDescription = false"
            class="mx-5"
          >
            {{ $t("close") }}
          </v-btn>
          <v-btn color="secondary" :to="`/apply/${job._id}`">
            {{ $t("apply") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "job-row",
  props: { job: { type: Object, require: true } },
  data() {
    return {
      openDescription: false,
    };
  },
  computed: {
    socials() {
      return [
        {
          title: "Facebook",
          icon: "mdi-facebook",
          action: () => this.shareOnSocial("facebook"),
        },
        {
          title: "Linkedin",
          icon: "mdi-linkedin",
          action: () => this.shareOnSocial("linkedin"),
        },
        // {
        //   title: "Whatsapp",
        //   icon: "mdi-whatsapp",
        //   action: () => this.shareOnSocial("whatsapp"),
        // },
        // {
        //   title: "Email",
        //   icon: "mdi-mail",
        //   action: () => this.shareOnSocial("email"),
        // },
      ];
    },
  },
  methods: {
    extractDescription(html) {
      const div = document.createElement("div");
      div.innerHTML = html;
      const text = div.textContent;
      const textLength = 150;
      if (text.length > textLength) return text.substr(0, textLength) + "...";
      else return text;
    },
    shareOnSocial(type) {
      if (type === "facebook") {
        let link = `https://www.facebook.com/sharer/sharer.php?u=${this.job.link}`;
        window.open(link, "_blank");
      } else if (type === "linkedin") {
        let link = `https://www.linkedin.com/sharing/share-offsite/?url=${this.job.link}`;
        window.open(link, "_blank");
      } else {
        this.$notify({
          group: "backend-error",
          title: "Comming Soon",
          text: `Sharing with ${type} is comming soon`,
          type: "warning",
          duration: 5000,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 0;
}
.details {
  display: flex;
  align-items: center;
  padding-top: 10px;
  border-top: 1px solid #ddd;
  margin-top: 10px;

  &-item {
    display: flex;
    align-items: center;
    &:first-child {
      border-right: 1px dashed #ddd;
      padding-right: 10px;
      margin: 0 1rem;
    }

    p {
      margin: 0 10px;
    }
  }
}

.v-application--is-rtl {
  .details {
    &-item {
      &:first-child {
        border-left: 1px dashed #ddd;
        padding-left: 10px;
        margin: 0 1rem;
        border-right-color: transparent;
        padding-right: 0;
      }
    }
  }
}

.socials {
  background: #fff;

  p.sm {
    font-size: 12px;
    color: #000;
    opacity: 0.5;
    padding-top: 0.5rem;
    padding-left: 0.5rem;
  }

  .lists {
    padding: 10px 0;

    &-item {
      padding: 0.5rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 14px;
      min-width: 150px;

      &--title {
        margin-left: 0.5rem;
      }
    }
  }
}

.cursor-pointer {
  cursor: pointer;
}

.job-row {
  display: none;
}

@media (min-width: 796px) {
  .job-card {
    display: none;
  }
  .job-row {
    display: block;
  }
}
</style>
