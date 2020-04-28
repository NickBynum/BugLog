<template>
  <div class="bug-details container-fluid">
    <div v-if="bugData.status == false" class="row m-3">
      <div v-if="!editing" class="col-12">
        <div class="row m-1">
          <div class="col-12">
            <h6>Title:</h6>
          </div>
          <div class="col-4">
            <h1>{{bugData.title}}</h1>
          </div>
        </div>
        <div class="row m-1">
          <div class="col-12">
            <div class="row justify-content-between">
              <div class="col-5">
                <h6>Reported by:</h6>
                <h3>{{bugData.creatorEmail}}</h3>
              </div>
              <div class="col-2">
                <h6>Status:</h6>
                <h3 class="text-success">Open</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 border">
            <p>{{bugData.description}}</p>
          </div>
        </div>
        <div class="row justify-content-end">
          <button class="btn btn-warning m-1" @click="editing = true">Edit Bug</button>
          <button class="btn btn-danger m-1" @click="closeBug()">Close Bug</button>
        </div>
        <div class="row">
          <div class="col-12">
            <h5>Notes</h5>
            <NotesComp></NotesComp>
          </div>
        </div>
      <Modal id="addNoteModal">
        <addNote></addNote>
      </Modal>
      </div>
      <div v-else>
        <form class="form-group">
          <label for="title">Title:</label>
          <input
            type="text"
            name="title"
            id="bugTitle"
            placeholder="Title..."
            v-model="bugData.title"
          />
          <label for="reportedBy">Reported By:</label>
          <h6 name="reportedBy">{{this.$store.state.profile.name}}</h6>
          <label for="bugDetails">Details of Bug:</label>
          <textarea
            name="bugDetails"
            id="formBugDetails"
            cols="30"
            rows="10"
            v-model="bugData.description"
          ></textarea>
          <button
            type="submit"
            class="btn btn-sm btn-primary"
            @click="editBug()"
          >Submit Changes</button>
        </form>
      </div>
    </div>
    <!-- Begin display view when closed -->
    <div v-else>
      <div class="col-12">
        <div class="row m-1">
          <div class="col-12">
            <h6>Title:</h6>
          </div>
          <div class="col-4">
            <h1>{{bugData.title}}</h1>
          </div>
        </div>
        <div class="row m-1">
          <div class="col-12">
            <div class="row justify-content-between">
              <div class="col-5">
                <h6>Reported by:</h6>
                <h3>{{bugData.creatorEmail}}</h3>
              </div>
              <div class="col-2">
                <h6>Status:</h6>
                <h3 class="text-danger">Closed</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 border">
            <p>{{bugData.description}}</p>
          </div>
        </div>
        <div class="no-click">
          <NotesComp></NotesComp>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import NotesComp from "../components/NotesComp";
import Modal from "../utils/Modal";
import addNote from "../components/AddNoteComp";
export default {
  name: "bug-details",
  data() {
    return {
      editing: false
    };
  },
  created() {
    this.$store.dispatch("getBug", this.$route.params.bugId);
    this.$store.dispatch("getNotes", this.$route.params.bugId);
  },
  computed: {
    bugData() {
      return this.$store.state.activeBug;
    }
  },
  methods: {
    closeBug() {
      if (confirm("Do you really wanna break my heart?")) {
        this.bugData.status = true;
        this.$store.dispatch("closeBug", this.bugData);
      } else {
        return;
      }
    },
    editBug() {
      this.$store.dispatch("editBug", this.bugData);
      this.editing = false;
    }
  },
  components: {
    NotesComp,
    Modal,
    addNote
  }
};
</script>


<style scoped>
.no-click {
  pointer-events: none;
}
.no-click button {
  pointer-events: none;
  background-color: grey;
}
</style>