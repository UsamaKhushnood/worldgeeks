/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import axios from "axios";

const vuexPersist = new VuexPersist({
  key: "my-app",
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    openSidebar: false,
    authentication_token: null,
    user: null,
  },

  getters :{
    getUser(state) {
      return state.user;
    }
  },
  
  mutations: {
    toggleSidebar(state, payload) {
      state.openSidebar = payload;
    },
    SET_AUTH_TOKEN(state, data) {
      state.authentication_token = data;
    },
    SET_USER(state, data) {
      state.user = data;
    }
  },
  actions: {
    toggleSidebar({ commit }, payload) {
      commit("toggleSidebar", payload);
    },
    HTTP_POST_REQUEST({ commit, state },data){
      return new Promise((resolve,reject)=>{
        axios.post(data.url, data.payload)
          .then(function (response) {
            resolve(response)
          })
          .catch(function (error) {
            reject(error)
          });
      })
    },
  
    HTTP_GET_REQUEST({ commit, state },data){

      return new Promise((resolve,reject)=>{
        axios.get(data.url,data.payload)
          .then(function (response) {
            resolve(response)
          })
          .catch(function (error) {
            reject(error)
          });
      })
    },

  },
});

