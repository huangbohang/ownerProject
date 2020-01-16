<template>
  <div class="">
      <Item v-for="item in 10" :key="item" />

  </div>
</template>

<script>
import Item from './item'
export default {
  name: 'List',
  components: { Item },
  props: {},
  data() {
    return {}
  },
  mounted() {
  },
  methods: {}
}
</script>
<style scoped lang="scss">

</style>
