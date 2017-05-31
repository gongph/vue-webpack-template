<template>
  <div id="app">
    <router-link to="/foo">Foo</router-link>
    <router-link to="/bar">Bar</router-link>

    <router-view></router-view>
    
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'hello, vue.js!'
      }
    },
    methods: {
      toggle () {
        console.log('hello!')
      }
    }
  }
</script>

<style>
  p { color: red; }
</style>
