<template>
  <div>
    <h1>cicle option</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CycleOption",
  //   data() {},
  //   methods: {},
  created() {
    console.log("Component created");
  },
  mounted() {
    console.log("Component mounted");
  },
  updated() {
    console.log("Component updated");
  },
  unmounted() {
    console.log("Component unmounted or destroyed");
  },
});
</script>

<style scoped></style>
