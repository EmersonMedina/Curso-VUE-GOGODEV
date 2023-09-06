<template>
    <main>
        <h1 class="principal_title">Componente card</h1>

        <section class="user_cards">
           <UserCard v-for="user in props.content" :key="user.name" :content="user"></UserCard>
        </section>        
    </main>
</template>

<script setup lang="ts">
    import { defineProps } from 'vue'
    import UserCard from '@/components/UserCard.vue'
    const props = defineProps({
        content: { type: Array, required: true}
    })
</script>

<style scoped>
    .user_cards { 
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>