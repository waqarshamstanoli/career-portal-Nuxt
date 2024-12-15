import {  public_url } from "../axios";
const state = {
    User: [],
};
const getters = {
    getUser: (state) => {
        return state.User;
    },
};
const mutations = {
    setUser: (state, payload) => {
        state.User = payload;
    },
};
const actions = {
    registerUser: (__, payload) => {
        return public_url
            .post("register", payload)
            .then((response) => {
                return response;
            })
            .catch((error) => console.log('error',error));
    },
    loginUser: (__, payload) => {
        return public_url
            .post("login", payload)
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