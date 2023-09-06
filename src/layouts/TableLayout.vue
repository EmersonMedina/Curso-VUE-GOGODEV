<template>
        <main>
        <h1 class="principal_title">Componente Tabla</h1>

        <section>
            <table class="user_table">
                <thead>
                        <tr>
                                <th> Nombre </th>
                                <th> Edad </th>
                                <th> Rol </th>
                        </tr>
                    
                </thead>

                <tbody>
                        <UserRow v-for="user in props.content" :key="user.name" :content="user"/>
                </tbody>
            </table>
        </section>        
    </main>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import UserRow from '@/components/UserRow'

const props = defineProps({
content: { type: Array, required: true}
})
</script>

<style scoped>
        /* Estilo básico para la tabla */
table {
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #fff;
  color: #000;
}

/* Encabezado de la tabla */
th {
  background-color: #f2f2f2;
  text-align: center;
  padding: 12px;
  border-bottom: 2px solid #000;
  font-weight: bold;
  color: #333;
}

/* Estilo para tablas responsivas en dispositivos móviles */
@media (max-width: 768px) {
  table {
    font-size: 14px;
  }
  th, td {
    padding: 8px;
  }
}

</style>