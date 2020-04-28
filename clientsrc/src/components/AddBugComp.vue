<template>
  <div class="AddBug">
    <h2 class="mt-0 mb-4">Report a Bug</h2>
    <form class="form-group">
      <label class="group" for="title">Title: </label>
      <input class="form-control" type="text" name="title" id="bugTitle" placeholder="Title..." v-model="newBug.title"/>
      <label for="reportedBy">Reported By: </label>
      <h6 name="reportedBy">{{this.$store.state.profile.name}}</h6>
      <label class="mt-2" for="bugDetails">Details of Bug: </label>
      <textarea class="form-control mt-1" name="bugDetails" id="formBugDetails" cols="30" rows="10" v-model="newBug.description"></textarea>
      <button
        type="submit"
        data-dismiss="modal"
        class="btn btn-sm btn-primary"
        @click="addBug()"
      >Submit Bug</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "AddBug",
  data() {
    return {
      newBug: {
        title: "",
        description: ""
      }
    };
  },
  // async mounted() {
  //   await this.$store.dispatch("getProfile");
  // },
  computed: {},
  methods: {
    async addBug() {
      await this.$store.dispatch("addBug", this.newBug)
      this.newBug = { title: "", description: ""}
      this.$router.push(
        {
          name: "BugDetails",
          params: { bugId: this.$store.state.activeBug.id }
        }
      )
    }
  },
  components: {}
};
</script>

<style scoped>
</style>