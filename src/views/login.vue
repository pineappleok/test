<template>
  <div>
    <p class="" @click="$router.push('/index')">登录页去首页</p>
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