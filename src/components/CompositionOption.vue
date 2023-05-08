<template>
  <div></div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated } from "vue";

onMounted(() => {
  console.log("Component mounted");
});

onUpdated(() => {
  console.log("Component updated");
});
</script>

<style scoped></style>
