<template>
  <h1>Listado de posts</h1>

  <div class="list-group">
    <router-link
      v-for="post in posts"
      :key="post.id"
      :to="{ name: 'PostDetail', params: { id: post.id } }"
      class="list-group-item list-group-item-action"
      >{{ post.title }}</router-link
    >
  </div>
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
</style>
