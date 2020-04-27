<template>
  <div class="AddNote">
    <form action="submit" @submit.prevent="addNote()" class="form-group">
      <label for="title">Add Comment</label>
      <input type="text" name="title" id="noteTitle" placeholder="Title..." v-model="newNote.title" />
      <label for="reportedBy">Reported By:</label>
      <button
        type="submit"
        data-dismiss="modal"
        class="btn btn-success m-1"
        @click="addNote()"
      >Submit Note</button>
      <button type="button" data-dismiss="modal" class="btn btn-danger m-1">Cancel</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "AddNote",
  data() {
    return {
      newNote: {
        title: ""
      }
    };
  },
  // async mounted() {
  //   await this.$store.dispatch("getProfile");
  // },
  computed: {},
  methods: {
    addNote() {
      this.newNote.bugId = this.$route.params.bugId
      this.newNote.creatorEmail = this.$store.state.profile.email
      this.$store.dispatch("addNote", this.newNote);
      this.newNote = {};
    }
  },
  components: {}
};
</script>

<style scoped>
</style>