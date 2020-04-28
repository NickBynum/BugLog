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
  timeout: 5000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    profile: {},
    bugs: [],
    notes: [],
    activeBug: {},
    activeNote: {},
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBugs(state, bugs) {
      state.bugs = bugs
    },
    setActiveBug(state, bug) {
      state.activeBug = bug
    },
    setNotes(state, notes) {
      state.notes = notes
    },
    setActiveNote(state, note) {
      state.notes = note
    }
  },
  actions: {
    setBearer({ }, bearer) {
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
    async getBugs({ commit, dispatch }) {
      try {
        let res = await api.get('bugs')
        commit("setBugs", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async addBug({ commit, dispatch }, bugData) {
      try {
        let res = await api.post('bugs', bugData)
        commit("setActiveBug", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async getBug({ commit, dispatch }, bugId) {
      try {
        let res = await api.get('bugs/' + bugId)
        commit("setActiveBug", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async closeBug({commit, dispatch}, bugData) {
      try {
      await api.put('bugs/' + bugData.id, {status: bugData.status })
        dispatch("getBug", bugData.id)
      } catch (error) {
        console.error(error);
      }
    },
    async editBug({commit, dispatch}, bugData) {
      try {
      await api.put('bugs/' + bugData.id, bugData)
        dispatch("getBug", bugData.id)
      } catch (error) {
        console.error(error);
      }
    },
    //#region Notes
    async addNote({ commit, dispatch }, noteData) {
      try {
        let res = await api.post('notes', noteData)
        dispatch("getNotes", noteData.bugId)
      } catch (error) {
        console.error(error);
      }
    },
    async getNotes({ commit, dispatch }, bugId) {
      try {
        let res = await api.get('bugs/' + bugId + '/notes')
        commit("setActiveNote", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async deleteNote({ commit, dispatch }, noteData) {
      try {
        let res = await api.delete('notes/' + noteData.id)
        dispatch("getBug", noteData.bugId)
      } catch (error) {
        console.error(error);
      }
    },
  }
});
