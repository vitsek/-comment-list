<template>
  <div id="app">
   <Main/>
  </div>
</template>

<script>

import Main from "./components/Main"

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #c7c7c7;
}

#app {
  text-align: center;
  -webkit-font-smoothing: antialiased;
}
</style>
