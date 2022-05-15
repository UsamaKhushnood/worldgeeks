import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    openSidebar: false,
  },
  mutations: {
    toggleSidebar(state, payload) {
      state.openSidebar = payload;
    },
  },
  actions: {
    toggleSidebar({ commit }, payload) {
      commit("toggleSidebar", payload);
    },
  },
});

export default store;
