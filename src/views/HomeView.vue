<template>
  <h1>Listado de usuarios</h1>
  
  <label class="search_label" for="search">Buscar:</label>
  <input id="search" type="text" v-model="search" @keyup="handleSearch">

  <div class="view_buttons">
    <button @click="handleLayout(ListLayout)">Ver en lista</button>
    <button @click="handleLayout(CardLayout)">Ver en tarjetas</button>
    <button @click="handleLayout(TableLayout)">Ver en tabla</button>
  </div>
  <component :is="layout" :content="filteredUsers"/>
</template>

<script lang="ts" setup>
  import { ref, defineAsyncComponent } from 'vue';

  const search = ref('')
  
  const ListLayout = defineAsyncComponent(() => import('@/layouts/ListLayout.vue'))
  const TableLayout = defineAsyncComponent(() => import('@/layouts/TableLayout.vue'))
  const CardLayout = defineAsyncComponent(() => import('@/layouts/CardLayout.vue'))

  const layout = ref(ListLayout)

  const handleLayout = (component) => {
    layout.value = component
  }

  const handleSearch = () => { filteredUsers.value = users.value.filter(user => user.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())) }

  const users = ref([
  {
    name: "Luis",
    age: 50,
    position: "frontend"
  },
  {
    name: "Ana",
    age: 35,
    position: "backend"
  },
  {
    name: "Carlos",
    age: 28,
    position: "designer"
  },
  {
    name: "María",
    age: 42,
    position: "project manager"
  },
  {
    name: "Juan",
    age: 32,
    position: "data analyst"
  },
  {
    name: "Laura",
    age: 45,
    position: "marketing"
  },
  {
    name: "Pedro",
    age: 38,
    position: "QA engineer"
  },
  {
    name: "Sara",
    age: 29,
    position: "product manager"
  },
  {
    name: "Miguel",
    age: 55,
    position: "CTO"
  }
]
)

const filteredUsers = ref(users.value); 

</script>

<style scoped>
  
  .search_label {
    color: #fff;
    margin-right: 0.5rem;
  }
  .view_buttons {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    padding: 1rem;
  }
</style>
