<template>
  <h3>{{ counter }}</h3>
  <button @click="incrementCounter">Incrementar</button>
  <button @click="decrementCounter">Disminuir</button>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";

let counter: Ref = ref(0);

function incrementCounter(): void {
  counter.value++;
}

function decrementCounter(): void {
  counter.value--;
}
</script>

<style scoped></style>
