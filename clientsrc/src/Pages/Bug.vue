<template>
  <tr class="Bug">
    <th scope="row" type="button" @click="getBugDetails()">{{bugData.title}}</th>
    <td>{{bugData.creatorEmail}}</td>
    <td v-if="bugData.status == true" class="text-danger">Closed</td>
    <td v-else class="text-success">Open</td>
    <td>{{bugData.updatedAt}}</td>
  </tr>
</template>


<script>
export default {
  data() {
    return {};
  },
  name: "Bug",
  props: ["bugData"],
  async mounted() {
    await this.$store.dispatch("getProfile");
  },
  computed: {
    profile() {
      return this.$store.state.user;
    }
  },
  methods: {
    getBugDetails() {
      this.$store.commit("setActiveBug", {});
      this.$router.push({
        name: "BugDetails",
        params: { bugId: this.bugData.id }
      });
    }
  },
  components: {}
};
</script>


<style scoped>
</style>