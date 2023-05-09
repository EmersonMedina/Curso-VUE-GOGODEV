<template>
  <div>
    <h2>COMPUTED OPTIONS</h2>
    <input type="text" v-model="message" />
    <h3>{{ message }}</h3>
    <h3>{{ reverse }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ComputedOption",
  data() {
    return { message: "" };
  },
  computed: {
    reverse(): string {
      return this.message.split("").reverse().join("");
    },
  },
});
</script>

<style scoped></style>
