<template>
  <div id="app">
    <button @click="toggle"> {{ msg }} </button>
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
