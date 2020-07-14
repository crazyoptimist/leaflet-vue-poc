import Vue from "vue";
import Vuex from "vuex";
import { default as map } from "./modules/map";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    map
  }
});
