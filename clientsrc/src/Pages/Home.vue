<template>
  <div class="home container-fluid">
    <div class="row mt-5 ml-5">
      <div class="col-12">
        <h4 class="bedr-logo">Bugs to Bedr</h4>
        <span>
          <input type="checkbox" @click="hideClosed()" /> Hide Closed
        </span>
        <div class="row">
          <div class="col-12">
            <BugsComp></BugsComp>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BugsComp from "../components/BugsComp";
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getBugs");
  },
  created() {
    this.$store.dispatch("getBugs");
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    hideClosed() {
      console.log("Betcha wish this worked!");
    }
  },
  components: {
    BugsComp
  }
};
</script>
