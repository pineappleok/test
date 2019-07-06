<template>
  <div>
    首页
    <p  @click="$router.go(-1)">首页返回登录页</p>

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