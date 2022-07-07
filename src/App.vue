<template>
  <div id="app">
    <HeaderNav/> 
  </div>
</template>
<script>
// @ is an alias to /src
import HeaderNav from '@/components/header.vue'

export default {
  name: 'App',
  components: {
    HeaderNav,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
#app {
  font-family: 'Kumbh Sans', sans-serif;
  text-align: center;
  text-decoration: none;
  margin: 10px auto;
  max-width: 1400px;
}

</style>
