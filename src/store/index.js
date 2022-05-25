import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

const vuexPersist = new VuexPersist({
  key: "my-app",
  storage: window.localStorage,
});

Vue.use(Vuex);

const store = new Vuex.Store({
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
    HTTP_POST_REQUEST(data){
      return new Promise((resolve,reject)=>{
        this.$http.post(data.url, data.payload)
          .then(function (response) {
            resolve(response)
          })
          .catch(function (error) {
            reject(error)
          });
      })
    },
  
    HTTP_GET_REQUEST(url){
      return new Promise((resolve,reject)=>{
        this.$http.get(url)
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

export default store;
