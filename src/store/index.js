import Vuex, { Store } from 'vuex';
import Vue from 'vue';

// modules
import User from './User';

Vue.use(Vuex);

export default new Store({
  state: {
    // global state
  },
  getters: {
    // global getters
  },
  mutations: {
    // global mutations
  },
  actions: {
    // global actions
  },
  modules: {
    User // User: User
  }
});