<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <h3>Installed CLI Plugins</h3>
    <ul>
     
    </ul>
    <h3>Essential Links</h3>
        <h2> ir a registro</h2>
        <p class="text-center"><a href="/registro/user">crear una cuenta</a></p>
        <h2>ir a Login </h2>
         <p class="text-center"><a href="/login/user">Login</a></p>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
