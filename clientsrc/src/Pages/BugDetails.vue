<template>
  <div class="bug-details container-fluid">
    <div v-if="bugData.closed == false" class="row m-3">
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
          <button class="btn btn-danger mt-1">Close Bug</button>
        </div>
        <div class="row">
          <div class="col-12">
            <h5>Notes</h5>
          </div>
        </div>
      </div>
        <notes></notes>
    </div>
    <!-- Begin display view when closed -->
    <div v-else>
      <div class="col-12">
        <h6>Title:</h6>
      </div>
      <div class="row">
        <div class="col"></div>
        <h1>{{bugData.title}}</h1>
      </div>
      <div class="row m-3">
        <div class="col-12">
          <div class="row justify-content-between">
            <div class="col-5">
              <h6>Reported by:</h6>
              <h3>{{bugData.creatorEmail}}</h3>
            </div>
            <div class="col-2">
              <h6>Status:</h6>
              <h4 class="text-danger">Closed</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "bug-details",
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getBug", this.$route.params.bugId);
  },
  computed: {
    bugData() {
      return this.$store.state.activeBug;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>