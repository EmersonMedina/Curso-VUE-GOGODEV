<template>

  <div>
    <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
          {{ locale }}
      </option>
    </select>
  </div>

  <h1>{{ $t("message.hello", {name: username, surname: surname}) }}</h1>
  <p>{{ $t("message.content") }}</p>
  <p> {{ $t("message.products", { count: 0 }) }}</p>
  <p> {{ $t("message.comments", { count: 5 }) }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const username = ref('Emerson')
const surname = ref('Medina')
</script>

<style scoped>

</style>