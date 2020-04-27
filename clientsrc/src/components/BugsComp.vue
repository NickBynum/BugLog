<template>
  <div class="bugs">
    <table class="table table-striped table-secondary">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Reported By</th>
          <th scope="col">Status</th>
          <th scope="col">Last Modified</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <!-- <th scope="row">{{bugTitle}}</th>
          <td>{{bugReportedBy}}</td>
          <td>{{status}}</td>
          <td>{{lastModified}}</td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: "BugsComp",
  // props: 'bugs',
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>