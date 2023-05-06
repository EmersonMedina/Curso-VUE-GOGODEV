<template>
  <h1 v-show="age < 18">Eres menor de edad</h1>
  <h1 v-show="age >= 18">Eres mayor de edad</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// let age = 10;

export default defineComponent({
  name: "ExampleSelective",
  setup() {
    let age = 0;
    return { age };
  },
});
</script>

<style scoped></style>
