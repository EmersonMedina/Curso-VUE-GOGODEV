<template>
   <div class="card">
        <h2 class="card_title"> {{ props.content.name }}</h2>
        <p>Edad: {{ props.content.age }}</p>
        <p>Rol: {{  props.content.position }}</p>
    </div>
</template>

<script setup lang="ts">
    import { defineProps } from 'vue';

    const props = defineProps(['content'])
</script>

<style scoped>
    .card {
        width: 20%; 
        min-width: 250px; 
        background-color: #2c8b6b; 
        border: 1px solid #fff; 
    }

    .card_title {
        background-color: white; 
        color: #000;
    }
</style>