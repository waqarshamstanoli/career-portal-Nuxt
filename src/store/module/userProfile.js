import {  private_url } from "../axios";
const state = {
    categories:[]
};
const getters = {
    // getAddedCategories: state => {
    //     return state.categories
    // },
};
const mutations = {
    
    SET_CATEGORIES:(state, payload) => {
        state.categories = payload
    },
};
const actions = {
    update_password: ({commit}, payload) => {
        return private_url
            .post('changepassword',payload)
            .then((response) => {
                commit("SET_CATEGORIES", response.data.data);
                return response;
            })
            .catch((error) => error);
    },
    update_profile: ({commit}, payload) => {
        return private_url
            .post('update_profile',payload)
            .then((response) => {
                commit("SET_CATEGORIES", response.data.data);
                return response;
            })
            .catch((error) => error);
    },
    
    
};
export default {
    state,
    getters,
    mutations,
    actions,
};