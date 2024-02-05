<template>
    <div>
        <h3>{{ props.title }}</h3>
        <p>{{ props.content }}</p>
        <button @click="clickMe">Click me</button>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['title', 'content'])
const emits = defineEmits(['clickMe'])
const clickMe = () => {
  emits('clickMe', 1)
}
</script>

<style scoped>

</style>
