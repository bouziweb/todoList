<template>
   <div class="header">
         <p>Total:{{todos.length}} </p>
   </div>
</template>

<script>
export default {
  props:{
    todos:{
      required:true,
      type:Array
    }
  }
  
}
</script>

<style  scoped>

  .header{
    color: bisque;
    top: 15px;
    right: 40px;
    position: absolute;
    font-family: 'Press Start 2P', cursive;
    font-size: 12px
  }
  

</style>