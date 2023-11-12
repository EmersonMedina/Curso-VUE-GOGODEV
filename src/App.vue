<template>
  <h3>{{ obj.count }}</h3>
  <button @click="obj.count = obj.count + 1 "> Increment</button>

  <button @click="$saySomething()">Say hello world</button>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'

   const obj = reactive({ 
    count: 0
   })

</script>


<style scoped>
</style>
