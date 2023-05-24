<template>
  <h1>I'm the blog section</h1>

  <ul>
    <li>
      <router-link :to="{ name: 'post', params: { id: 1 } }"
        >Primer Post</router-link
      >
    </li>
    <li>
      <router-link :to="{ name: 'post', params: { id: 2 } }"
        >Segundo Post</router-link
      >
    </li>
    <li>
      <router-link :to="{ name: 'post', params: { id: 3 } }"
        >Tercer Post</router-link
      >
    </li>
    <li>
      <router-link :to="{ name: 'post', params: { id: 4 } }"
        >Cuarto Post</router-link
      >
    </li>
    <li>
      <router-link :to="{ name: 'post', params: { id: 5 } }"
        >Quinto Post</router-link
      >
    </li>
  </ul>
</template>

<script setup lang="ts"></script>

<style scoped></style>
