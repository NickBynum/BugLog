<template>
  <div class="AddNote">
    <form action="submit" @submit="addNote()" class="form-group">
      <label for="title">Add Comment</label>
      <input type="text" name="title" id="noteTitle" placeholder="Title..." v-model="newNote.title"/>
      <label for="reportedBy">Reported By:</label>
      <h6 name="reportedBy">{{this.$store.state.profile.name}}</h6>
      <label for="noteDetails">Comment:</label>
      <textarea name="noteDetails" id="formNoteDetails" cols="30" rows="10" v-model="newNote.description"></textarea>
      <button
        type="submit"
        data-dismiss="modal"
        class="btn btn-sm btn-primary"
        @click="addNote()"
      >Submit Note</button>
            <button
        type="button"
        data-dismiss="modal"
        class="btn btn-sm btn-danger"
      >Cancel</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "AddNote",
  data() {
    return {
      newNote: {
        title: "",
        description: ""
      }
    };
  },
  computed: {},
  methods: {
    addNote() {
      this.$store.dispatch("addNote", this.newNote)
      this.newNote = { title: "", description: ""}
    }
  },
  components: {}
};
</script>

<style scoped>
</style>