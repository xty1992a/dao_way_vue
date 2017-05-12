<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: ['msg'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
