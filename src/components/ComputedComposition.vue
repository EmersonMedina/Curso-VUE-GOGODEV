<template>
  <div>
    <h2>COMPUTED COMPOSITION</h2>
    <input type="text" v-model="message" />
    <h3>{{ message }}</h3>
    <h3>{{ reverse }}</h3>
  </div>
</template>

<script setup lang="ts">
import { computed, Ref, ref } from "vue";
let message: Ref<string> = ref("");
const reverse = computed(() => message.value.split("").reverse().join(""));
</script>

<style scoped></style>
