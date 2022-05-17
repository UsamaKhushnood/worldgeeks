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
