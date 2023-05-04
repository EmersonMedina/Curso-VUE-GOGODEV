<template>
  <h2>Counter with COMPOSITION API</h2>
  <CounterComposition />
  <h2>Counter with OPTIONS API</h2>
  <CounterOption />
  <h1>Lista de Posts:</h1>
  <PostContainer />
</template>

<script lang="ts" setup>
import PostContainer from "./components/PostContainer.vue";
import CounterOption from "./components/CounterOption.vue";
import CounterComposition from "./components/CounterComposition.vue";
</script>

<style></style>
