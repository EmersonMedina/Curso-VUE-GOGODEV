<template>
  <h1>Post Details</h1>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">{{ post.body }}</p>
      <router-link :to="{ name: 'PostList' }"> Volver </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import PostService from "@/services/PostService";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const service = new PostService();

const post = service.getPost();

onMounted(async () => {
  const route = useRoute();
  const postId = route.params.id;
  await service.fetchById(postId);
});
</script>

<style scoped></style>
