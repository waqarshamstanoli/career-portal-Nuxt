import {  private_url } from "../axios";
const state = {
    
};
const getters = {
    
};
const mutations = {
    
};
const actions = {
    subscribe: (__, payload) => {
        return private_url
            .post("submition", payload)
            .then((response) => {
                return response;
            })
            .catch((error) => error);
    },
    getPlans: (__, payload) => {
        return private_url
            .get("plans", payload)
            .then((response) => {
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