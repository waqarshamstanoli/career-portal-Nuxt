import Vue from "vue";
import Vuex from "vuex";
import axios from "@/plugins/axios";

Vue.use(Vuex);
export default () => new Vuex.Store({
    state: {
        company: null,
    
   
  },
  getters: {
  
  },
  actions: {
    async FETCH_COMPANY({ commit }) {

        try {
          if (process.browser) {
            let company = window.location.hostname;
          if (company === "localhost") {
            company = "chi.airec.io";
          }
          let like = {
            key: "url",
            value: company,
          };
          const resp = await axios.get(`/company?like=${JSON.stringify(like)}`);

          if (resp.data.count >= 1) {

            commit("SET_COMPANY", resp.data.data[0]);
          }

        }
  
          
        } catch (e) {
          console.log(e);
        }
      },
  },
  mutations: {
    SET_COMPANY(state, company) {
        state.company = company;
      },
  },
  modules: {
    
  },
  });
