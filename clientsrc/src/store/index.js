import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    profile: {},
    bugs: [],
    notes: [],
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBugs(state, bugs) {
      state.bugs = bugs
    }
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    //#region --Bugs --
    async getBugs({commit, dispatch}) {
      try {
        let res = await api.get('bugs')
        commit("setBugs", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async addBug({commit, dispatch}, bugData) {
      try {
        let res = await api.post('bugs', bugData)
        dispatch("getBugs")
      } catch (error) {
        console.error(error);
      }
    }
  }
});
