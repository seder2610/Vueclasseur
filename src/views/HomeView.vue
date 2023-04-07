<script setup>
  import Sidebar from "../components/Sidebar.vue"
  import Main from "../components/Main.vue";
  

</script>
<template>
  <div>
    <div class="container">
      <div class="sidebar"><Sidebar/></div>
      <div class="main"> <Main/></div>
    </div>
    
   
      
  
  
  </div>
</template>
<style scoped>
  .container{
    display: flex;
    
  }

  .sidebar{
    width: 30%;
   
  }

  main {
    width: 70%;
  }



</style>

