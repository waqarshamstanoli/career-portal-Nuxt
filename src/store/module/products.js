import {  private_url } from "../axios";
const state = {
    products:[]
};
const getters = {
    getAddedProducts: state => {
        return state.products
    },
};
const mutations = {
    SET_PRODUCTS:(state, payload) => {
        state.products = payload
    },
};
const actions = {
    get_products: ({commit}, payload) => {
        return private_url
            .get('products',{},{ params: { category_id: 2 } } )
            .then((response) => {
                commit('SET_PRODUCTS',response.data.data)
                return response;
            })
            .catch((error) => error);
    },
    add_product: ({commit}, payload) => {
        return private_url
            .post('addproduct',payload, { headers: {
                
                'Content-Type': 'multipart/form-data'
              },} )
            .then((response) => {
                commit('SET_PRODUCTS',response.data.data)
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