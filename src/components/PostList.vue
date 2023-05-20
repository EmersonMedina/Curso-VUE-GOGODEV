<template>
  <h1>Listado de posts</h1>
  <button class="btn btn-primary">With Bootstrap</button>

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

<style lang="scss" scoped>
h1 {
  color: $titleColor;
}
.post-list {
  list-style-type: none; /* Oculta la viñeta predeterminada */
  margin-left: 20px; /* Margen izquierdo para la sangría */

  li {
    color: $paragraphColor;
  }

  li:hover {
    background-color: darken($color: $titleColor, $amount: 10);
  }
}
</style>
