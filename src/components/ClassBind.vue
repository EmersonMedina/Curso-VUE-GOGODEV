<template>
  <p :style="{ backgroundColor: bg, color: '#fff' }">
    El mensaje se ha enviado satisfactoriamente
  </p>

  <button @click="changeColor">Cambiar color</button>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";

let bg: Ref = ref("orange");

const changeColor = (): void => {
  if (bg.value === "green") bg.value = "orange";
  else bg.value = "green";
};
</script>

<style scoped>
.danger {
  color: red;
}
</style>
