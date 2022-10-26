import apiClient from "@/store/modules/http";
import _map from "lodash/map";

const state = {
  test: null,
  is_fetching: false,
  is_fetching_monthly_sales: false,
  years: [],
  yearly_sales: [],
};

const mutations = {
  SET_SALES(state, { sales }) {
    state.sales = sales;
  },
  SET_IS_FETCHING(state, bool) {
    state.is_fetching = bool;
  },
  SET_YEARS(state, { years }) {
    state.years = _map(years, "year");
  },
  SET_YEARLY_SALES(state, data) {
    state.yearly_sales = _map(data, "total_sales");
  },
  SET_IS_FETCHING_MONTHLY_SALES(state, bool) {
    state.is_fetching_monthly_sales = bool;
  },
};

// ({ dispatch, commit, getters, rootGetters })
const actions = {
  ///sales/get_sales_per_year/{year}
  async dbGetSalesPerYear({ commit }, year) {
    commit("SET_IS_FETCHING_MONTHLY_SALES", true);
    try {
      let response = await apiClient({
        method: "GET",
        url: `/api/sales/get_sales_per_year/${year}`,
      });
      commit("SET_YEARLY_SALES", response.data.result);
      commit("SET_IS_FETCHING_MONTHLY_SALES", false);
      return response;
    } catch (error) {
      return error.response;
    }
  },
  async dbGetYears({ commit }) {
    try {
      const response = await apiClient({
        method: "GET",
        url: "/api/sales/years",
      });
      commit("SET_YEARS", response.data);
      return response;
    } catch (error) {
      return error.response;
    }
  },
  async dbFetchAllSales({ commit }) {
    commit("SET_IS_FETCHING", true);
    try {
      const response = await apiClient({
        method: "GET",
        url: "/api/sales/all",
      });
      commit("SET_IS_FETCHING", response.status === 201 ? false : true);
      // commit("SET_SALES", )
      return response;
    } catch (error) {
      commit("SET_IS_FETCHING", false);
      return error.response;
    }
  },
};

// (state, getters, rootState, rootGetters)
const getters = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
