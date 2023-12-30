<template>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <RouterLink to="/" class="link">Go back</RouterLink>
</template>

<script setup lang="ts">
    import { useRoute } from 'vue-router';
    import { onMounted } from 'vue';
    import PostService from '@/services/PostService';

    const postService = new PostService()
    const post = postService.getPost()
    onMounted(async () => {
        const route = useRoute()
        const postId = route.params.id
        await postService.fetchById(postId)
    })
</script>