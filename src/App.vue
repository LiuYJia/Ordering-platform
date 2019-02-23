<template>
  <div id="app">
    <img src="./assets/load.jpg">
    
    <router-view/>

  </div>
</template>

<script>

export default {
  name: 'App',
  created(){
    setTimeout(() => {
      $('#app img').css('display','none')
      this.$router.push('/login')
    }, 1000);
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0
}
#app img{
  height: 100vh;
  width: 100vw;
}
</style>
