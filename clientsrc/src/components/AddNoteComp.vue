<template>
  <div class="AddNote">
    <form action="submit" @submit.prevent="addNote()" class="form-group">
      <label for="title">Add Comment</label>
      <input
        class="form-control"
        type="text"
        name="title"
        id="noteTitle"
        placeholder="Title..."
        v-model="newNote.title"
      />
      <label for="reportedBy">Reported By: {{this.$auth.user.name}}</label>
      <div class="row justify-content-center">
        <div class="col-6">
          <button type="button" data-dismiss="modal" class="btn btn-danger m-1">Cancel</button>
          <button
            type="submit"
            data-dismiss="modal"
            class="btn btn-success m-1"
            @click="addNote()"
          >Submit Note</button>
        </div>
      </div>
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
      this.newNote.bugId = this.$route.params.bugId;
      this.newNote.creatorEmail = this.$auth.user.email;
      this.$store.dispatch("addNote", this.newNote);
      this.newNote = {};
    }
  },
  components: {}
};
</script>

<style scoped>
</style>