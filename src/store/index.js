import { createStore } from "vuex";
import user from "./modules/user";
import sales from "./modules/sales";
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    sales,
  },
});
