import { defineStore } from "pinia";
import apiClient from "@/store/modules/http";

export const useLogbookStore = defineStore("logbook", {
  state: () => ({
    count: 0,
    name: "Dave",
    logbooks: [],
    current_logbook: { id: 0, fullname: "", date: "", time: "", purpose: "" },
    updating: false,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
    getCurrentLogbookId: (state) => state.current_logbook.id,
  },
  actions: {
    async dbUpdateLogBook(form) {
      console.log("hit in dbUpdateLogBook");
      console.log(form);
      try {
        const response = await apiClient({
          method: "PUT",
          url: "/api/logbook",
          data: {
            form,
            id: this.current_logbook.id,
          },
        });
        return response;
      } catch (error) {
        return error.response;
      }
    },
    async dbFetchAll() {
      try {
        const response = await apiClient({
          method: "GET",
          url: "/api/logbook",
        });
        // console.log(response.data);
        let { logbooks } = response.data;
        this.logbooks = logbooks;
        return response;
      } catch (error) {
        return error.response;
      }
    },
    async dbSaveLogBook(form) {
      try {
        const response = await apiClient({
          method: "POST",
          url: "/api/logbook",
          data: form,
        });
        // console.log(response.data);
        return response;
      } catch (error) {
        return error.response;
      }
    },
    increment() {
      this.count++;
    },
    decrease() {
      this.count--;
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random());
      console.log(`randomizing counter: ${this.count}`);
    },
  },
});
