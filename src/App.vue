<template>
  <ComputedOption />
  <ComputedComposition />
  <FacturaExercise />
</template>

<script lang="ts" setup>
import ComputedComposition from "./components/ComputedComposition.vue";
import ComputedOption from "./components/ComputedOption.vue";
import FacturaExercise from "./components/FacturaExercise.vue";
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
