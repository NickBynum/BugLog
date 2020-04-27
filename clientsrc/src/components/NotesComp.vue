<template>
  <div class="NotesComp">
    <table class="table table-striped table-secondary">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Message</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <note v-for="note in notes" :noteData="note" :key="note.id"></note>
      </tbody>
    </table>
    <div class="row">
      <div class="col-12 text-right">
        <button class="btn btn-success" data-toggle="modal" data-target="#addNoteModal">Add Note</button>
      </div>
    </div>
  </div>
</template>


<script>
import Note from "../Pages/Note";
export default {
  name: "NotesComp",
  props: ["noteData"],
  data() {
    return {};
  },
  computed: {
    notes() {
      return this.$store.state.notes;
    }
  },
  methods: {},
  components: {
    Note
  }
};
</script>


<style scoped>
</style>