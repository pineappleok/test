<template>
  <div>
    其他页
    <p @click="$router.push('/index')">1212</p>

  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      toast() {
        Toast({
          message: '提示',
          position: 'bottom',
          duration: 5000
        });
      }
    }
  }
</script>

<style>

</style>