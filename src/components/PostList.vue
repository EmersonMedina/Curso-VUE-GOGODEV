<template>
  <h1>Listado de posts</h1>

  <ul class="post-list">
    <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import PostService from "@/services/PostService";

const service = new PostService();
let posts = service.getPosts();

onMounted(async () => {
  await service.fetchAll();
});
</script>

<style scoped>
.post-list {
  list-style-type: none; /* Oculta la viñeta predeterminada */
  margin-left: 20px; /* Margen izquierdo para la sangría */
}
</style>
