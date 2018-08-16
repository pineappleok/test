<template>
  <div id="app">
    <mt-button type="default" @click.native="toast">default</mt-button>
    <router-view/>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
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
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>