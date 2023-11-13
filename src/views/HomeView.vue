<template>
  <main>
      <h1>Counter app</h1>
      <h2 id="counter-info">{{ counter }}</h2>
      <button @click="() => counter++"> Increment</button>
      <button @click="$event => {counter--; console.log($event)}"> Decrement</button>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(0)

</script>