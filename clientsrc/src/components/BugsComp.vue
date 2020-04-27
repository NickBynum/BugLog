<template>
  <div class="BugsComp">
    <table class="table table-striped table-secondary">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Reported By</th>
          <th scope="col">Status</th>
          <th scope="col">Last Modified</th>
        </tr>
      </thead>
      <tbody>
        <bug v-for="bug in bugs" :bugData="bug" :key="bug.id"></bug>
      </tbody>
    </table>
  </div>
</template>


<script>
import Bug from "../Pages/Bug";
export default {
  name: "BugsComp",
  props: ["bugData"],
  data() {
    return {};
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  },
  methods: {},
  components: {
    Bug
  }
};
</script>


<style scoped>
</style>