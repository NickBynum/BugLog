<template>
  <div class="AddBug">
    <h2 class="mt-0 mb-4">Report Bug</h2>
    <form action="submit" @submit="addBug()" class="form-group">
      <label for="title">Title:</label>
      <input type="text" name="title" id="bugTitle" placeholder="Title..." v-model="newBug.title"/>
      <label for="reportedBy">Reported By:</label>
      <h6 name="reportedBy">{{this.$store.state.profile.name}}</h6>
      <label for="bugDetails">Details of Bug:</label>
      <textarea name="bugDetails" id="formBugDetails" cols="30" rows="10" v-model="newBug.description"></textarea>
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
  computed: {},
  methods: {
    addBug() {
      this.$store.dispatch("addBug", this.newBug)
      this.newBug = { title: "", description: ""}
    }
  },
  components: {}
};
</script>

<style scoped>
</style>