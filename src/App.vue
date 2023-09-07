<template>
  <button @click="show = !show">Mostrar / Ocultar</button>
  <Transition>
    <h1 v-if="show">Main app animated</h1>
  </Transition>

  <ListComponent/>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import ListComponent from '@/components/ListComponent.vue'

  const show = ref(false)

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.v-enter-active, .v-leave.active{
  transition: opacity 0.5s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}

</style>
