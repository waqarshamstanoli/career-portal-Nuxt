<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="7" md="12" sm="12">
        <v-card width="100%" elevation="0" class="mb-8">
          <v-tabs v-model="tabs">
            <v-tabs-slider></v-tabs-slider>
            <v-tab v-for="item in items" :key="item" class="px-8">
              {{ item }}
            </v-tab>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <User-account ></User-account>
      </v-tab-item>
      <v-tab-item><User-plans></User-plans></v-tab-item>
      <v-tab-item><User-billing></User-billing></v-tab-item>

      <v-tab-item><User-security></User-security></v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import UserAccount from "@/components/UserAccount.vue";
import UserBilling from "@/components/UserBilling.vue";
import UserPlans from "@/components/UserPlans.vue";
import UserSecurity from "@/components/UserSecurity.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    UserAccount,
    UserBilling,
    UserPlans,
    UserSecurity,
  },
  data() {
    return {
      tabs: null,
      items: ["Account", "Plans", "BIlling", "Security", "logout"],
     
    };
  },
  methods: {
    ...mapActions([]),
    logout() {
      localStorage.removeItem('access_token');
      this.$router.push({ path: "/" });
    },
    
  },
  computed: {
    ...mapGetters([]),
  },
};
</script>

<style scoped></style>
