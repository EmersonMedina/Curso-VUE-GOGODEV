<template>
  <h1>I am the principal view</h1>

  <h2>Notes</h2>

  <div v-for="note in notes" :key="note.title" v-if="notes.length > 0">
    <h3>{{ note.title}}</h3>
    <p>{{ note.content }}</p>
  </div>

  <h2 v-else>There aren't notes to show</h2>
</template>

<script lang="ts" setup>
  import NotesService from '../services/NotesService'
  import { onMounted, ref, type Ref } from 'vue';
  import type INote from '~/interfaces/INote';

  const notesService = new NotesService()
  const notes: Ref<INote[]> = ref([])
  onMounted(async () => {
    notes.value = await notesService.getNotes()
  })
</script>

<style>

</style>