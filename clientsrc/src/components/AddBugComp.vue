<template>
  <div class="AddBug">
    <form action="submit" @submit="addBug()" class="form-group">
      <label for="title">Title:</label>
      <input type="text" name="title" id="bugTitle" placeholder="Title..." />
      <label for="reportedBy">Reported By:</label>
      <h6 name="reportedBy">{{this.$store.state.profile.name}}</h6>
      <label for="bugDetails">Details of Bug:</label>
      <textarea name="bugDetails" id="formBugDetails" cols="30" rows="10"></textarea>
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
    return {};
  },
  computed: {},
  methods: {
    addBug() {
      console.log("Add bug button triggered!");
    }
  },
  components: {}
};
</script>

<style scoped>
</style>