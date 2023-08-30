<template>
  <input type="text" v-model="note">
  <button @click="sendToServer">Enviar nota al servidor</button>

  <RouterView></RouterView>
</template>

<script lang="ts" setup>
  import {ref} from 'vue'

  let note = ref('')

  const sendToServer = async () => {
    const rawResponse = await fetch('http://aaaaaaaaaaa', {
      method: 'POST', 
      headers: {
        'Content-Type' : 'application/json', 
        'Accept': 'application/json',
        'Authorization': 'Bearer abcdejwt'
      }, 
      body: JSON.stringify({ note: note.value })
    })
    
    const response = await rawResponse.json()
  }
</script> 

