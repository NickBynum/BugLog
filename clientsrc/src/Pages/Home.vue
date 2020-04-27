<template>
  <div class="home container-fluid">
    <div class="row mt-5 ml-5">
      <div class="col-12">
        <h4 class="bedr-logo">Bugs to Bedr</h4>
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
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {
    BugsComp
  }
};
</script>
