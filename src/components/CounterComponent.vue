<template>
  <h1>Counter: {{ store.count }}</h1>
  <h2>Counter x 2 = {{ store.times2 }}</h2>
  <button @click="store.increment(1)">increment</button>
</template>

<script lang="ts" setup>
  import { useCounterStore } from '../store/counter'
  const store = useCounterStore()
</script>

