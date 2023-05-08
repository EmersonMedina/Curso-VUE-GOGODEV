<template>
  <h1>v-model</h1>
  <form>
    <label for="nombre">
      Nombre
      <input id="nombre" type="text" v-model="nombre" />
    </label>

    <label for="teminosCondiciones">
      Acepto los términos y condiciones
      <input
        id="teminosCondiciones"
        type="checkbox"
        v-model="terminosYCondiciones"
      />
    </label>

    <select v-model="country">
      <option value="spain">Spain</option>
      <option value="france">France</option>
      <option value="uk">UK</option>
    </select>
  </form>
  <h3>
    {{ nombre }}
  </h3>

  <h3>
    {{ terminosYCondiciones }}
  </h3>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
let nombre: Ref<string> = ref("");
let terminosYCondiciones: Ref<boolean> = ref(false);
let country: Ref<string> = ref("france");
</script>

<style scoped></style>
