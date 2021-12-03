import Vue from "vue";
import Vuex from "vuex";
import tasks from "./TasksState";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tasks,
  },
});