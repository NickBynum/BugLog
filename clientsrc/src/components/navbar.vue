<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <router-link class="navbar-brand bedr-logo" :to="{ name: 'Home' }">Bedr-Bugs</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" :class="{ active: $route.name == 'Home' }">
          <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
        </li>
        <li
          class="nav-item"
          v-if="$auth.isAuthenticated"
          :class="{ active: $route.name == 'Profile' }"
        >
          <router-link class="nav-link" :to="{ name: 'Profile' }">Profile</router-link>
        </li>
      </ul>
      <span class="navbar-text">
        <!-- //TODO - Make OpenBug Method -->
        <button class="btn btn-dark" data-toggle="modal" data-target="#addBugModal">Report</button>
        <button class="btn btn-success m-1" @click="login" v-if="!$auth.isAuthenticated">Login</button>
        <button class="btn btn-danger m-1" @click="logout" v-else>logout</button>
      </span>
      <Modal id="addBugModal">
        <AddBug></AddBug>
      </Modal>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
import { getUserData } from "@bcwdev/auth0-vue";
import Modal from "../utils/Modal"
import AddBug from "../components/AddBugComp"
export default {
  name: "Navbar",
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      this.$store.dispatch("getProfile");
    },
    async logout() {
      this.$store.dispatch("resetBearer");
      await this.$auth.logout({ returnTo: window.location.origin });
    }
  },
  components: {
    Modal,
    AddBug
  }
};
</script>

<style>
.bedr-logo {
  font-family: "Long Cang", cursive;
  font-family: "Nanum Pen Script", cursive;
  font-family: "Rock Salt", cursive;
}
</style>
