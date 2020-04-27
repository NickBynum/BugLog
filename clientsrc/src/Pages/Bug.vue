<template>
  <div class="Bug">
        <tr >
          <th scope="row">{{bugData.title}}</th>
          <td>{{bugData.description}}</td>
          <td>{{bugData.status}}</td>
          <td>{{bugData.updatedAt}}</td>
        </tr>
  </div>
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