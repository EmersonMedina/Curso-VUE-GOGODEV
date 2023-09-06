<template>
    <h1>Componente lista</h1>
    <ul class="user_list">
        <UserList v-for="user in props.content" :key="user.name" :content="user">
            <h2> {{ user.name }}</h2>
            <p>{{ user.age }}</p>
            <p>{{  user.position }}</p>
        </UserList>
    </ul>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import UserList from '@/components/UserList'

const props = defineProps({
    content: { type: Array, required: true}
})
</script>

<style scoped>
    .user_list { 
        display: flex;
        align-items: center; 
        flex-wrap: wrap;
        gap: 1.5rem;
        padding: 0 1rem;
    }
</style>