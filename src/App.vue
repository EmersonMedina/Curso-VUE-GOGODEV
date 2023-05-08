<template>
  <CycleOption />
  <PostList />
</template>

<script lang="ts" setup>
import CycleOption from "./components/CycleOption.vue";
import PostList from "./components/PostList.vue";
</script>

<style>
body {
  margin: 0 auto;
  max-width: 1200px;
}

* {
  box-sizing: border-box;
}
</style>
