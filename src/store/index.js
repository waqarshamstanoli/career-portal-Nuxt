import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

// import { public_url, private_url } from "./axios";
import auth from "./module/auth";
import pricing from "./module/pricing";
import products from "./module/products";
import categories from "./module/categories";
import userProfile from "./module/userProfile";
Vue.use(Vuex);
const dataState = createPersistedState({
  paths: ['data']
})

export default new Vuex.Store({
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {},
  modules: {
    auth,
    pricing,
    categories,
    products,
    userProfile
  },
  plugins: [dataState]
});
