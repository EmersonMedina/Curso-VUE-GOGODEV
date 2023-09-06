<template>
    <li class="list">
         <h2>Nombre: {{ props.content.name }}</h2>
         <p>Edad: {{ props.content.age }}</p>
         <p>Rol: {{  props.content.position }}</p>
     </li>
 </template>
 
 <script setup lang="ts">
     import { defineProps } from 'vue';
 
     const props = defineProps(['content'])
 </script>
 
 <style scoped>
     .list {
        display: flex; 
        width: 100%; 
        justify-content: space-around;
        background-color: #2c8b6b; 
     }
 </style>