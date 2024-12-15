import {  private_url } from "../axios";
const state = {
    categories:[]
};
const getters = {
    getAddedCategories: state => {
        return state.categories
    },
};
const mutations = {
    
    SET_CATEGORIES:(state, payload) => {
        state.categories = payload
    },
};
const actions = {
    add_category: ({commit}, payload) => {
        return private_url
            .post('category',payload )
            .then((response) => {
                commit('SET_CATEGORIES',response.data.data)
                return response;
            })
            .catch((error) => error);
    },
    get_categories: ({commit}, payload) => {
        return private_url
            .get('category',payload)
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