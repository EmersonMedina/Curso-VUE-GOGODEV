<template>
  <h1>I'm the post view</h1>

  <h2>Post id: {{ postId }}</h2>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

let postId: Ref<any> = ref();
onMounted(() => {
  const route = useRoute();
  postId.value = route.params.id;
});
</script>

<style scoped></style>
