import apiClient from "@/store/modules/http";
// import { filter } from "lodash";
const state = {
  test: null,
  users: [],
  users_view: [],
  logged_in_user: {
    confirmed: 0,
    email: "",
    id: 0,
    name: "",
  },
};

const mutations = {
  EXAMPLE_MUTATION(state, user) {
    state.logged_in_user = user;
  },
};

const actions = {
  async dbForceLogout({ commit, state }) {
    try {
      const response = await apiClient({
        method: "POST",
        url: "/api/logout",
        data: {
          user_id: localStorage.getItem("auth_user_id"),
        },
      });
      return response;
    } catch (error) {
      return error.response;
    }
  },
};

// (state, getters, rootState, rootGetters)
const getters = {
  loggedInFullName(state) {
    return state.logged_in_user.name;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
