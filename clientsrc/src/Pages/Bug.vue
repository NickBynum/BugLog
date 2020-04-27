<template>
        <tr class="Bug">
          <th scope="row">{{bugData.title}}</th>
          <td>{{bugData.creatorEmail}}</td>
          <td v-if="bugData.status == true" class="text-danger">
            Closed</td>
            <td v-else class="text-success">Open</td>
          <td>{{bugData.updatedAt}}</td>
        </tr>
</template>


<script>
export default {
  name: 'Bug',
  props: ['bugData'],
  data(){
    return {}
  },
  computed:{},
  methods:{},
  components:{}
}
</script>


<style scoped>

</style>