<template>
    <tr class="row">
         <td>{{ props.content.name }}</td>
         <td>{{ props.content.age }}</td>
         <td>{{  props.content.position }}</td>
     </tr>
 </template>
 
 <script setup lang="ts">
     import { defineProps } from 'vue';
 
     const props = defineProps(['content'])
 </script>
 
 <style scoped>

    /* Estilo para las filas pares */
    tr:nth-child(even) {
    background-color: #f2f2f2;
    }

    /* Estilo para las filas impares */
    tr:nth-child(odd) {
    background-color: #fff;
    }

    /* Estilo para resaltar filas al pasar el cursor */
    tr:hover {
    background-color: #e0e0e0;
    transition: background-color 0.3s;
    }

    /* Celdas de datos */
    td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    color: #333;
    text-align: left;
    border: 1px solid #000;
    }



 </style>