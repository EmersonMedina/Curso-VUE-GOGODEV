<template>
  <main>
    <h1>List of Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="{ name: 'detail', params: { id: post.id}}">{{ post.title }}</RouterLink>
      </li>
    </ul>    
  </main>
</template>

<script setup lang="ts">
import PostService from '@/services/PostService';
  import { onMounted } from 'vue';
  const postService = new PostService(); 
  const posts = postService.getPosts()  
  onMounted(async () => {
    postService.fetchAll(); 
  })

</script>
