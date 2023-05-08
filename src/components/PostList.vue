<template>
  <div class="container">
    <PostDetail
      v-for="post in info"
      :key="post.title"
      :title="post.title"
      :description="post.description"
      @sayHi="showAlert"
    />
  </div>
</template>

<script setup lang="ts">
import PostDetail from "./PostDetail.vue";

interface IPost {
  title: string;
  description: string;
}

let info: Array<IPost> = [
  { title: "Post 1", description: "Texto de ejemplo 1" },
  { title: "Post 2", description: "Texto de ejemplo 2" },
  { title: "Post 3", description: "Texto de ejemplo 3" },
  { title: "Post 4", description: "Texto de ejemplo 4" },
  { title: "Post 5", description: "Texto de ejemplo 5" },
];

function showAlert(msg: string) {
  alert(msg);
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 0.5rem;
}
</style>
