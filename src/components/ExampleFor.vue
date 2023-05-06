<template>
  <ul>
    <li v-for="country in countries" :key="country.code">{{ country.name }}</li>
  </ul>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";

interface ICountry {
  code: string;
  name: string;
}

let countries: Ref<Array<ICountry>> = ref([
  {
    code: "es",
    name: "Spanin",
  },
  {
    code: "fr",
    name: "France",
  },
  {
    code: "it",
    name: "Italy",
  },
  {
    code: "hn",
    name: "Honduras",
  },
  {
    code: "en",
    name: "UK",
  },
]);
</script>

<style scoped></style>
