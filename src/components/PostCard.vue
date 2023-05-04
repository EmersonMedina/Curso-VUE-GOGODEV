<template>
  <div class="post-card">
    <h3>TÍTULO</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iusto,
      molestiae quam unde voluptas, eaque ut voluptates consectetur hic eos
      voluptatibus quibusdam quia deleniti libero autem harum pariatur, rerum
      sit.
    </p>

    <PostButtton />
  </div>
</template>

<script setup lang="ts">
import PostButtton from "./PostButton.vue";
</script>

<style scoped>
.post-card {
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #ccc;
}
</style>
