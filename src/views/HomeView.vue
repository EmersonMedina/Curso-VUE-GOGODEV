<template>
  <div class="home">
    <ToastComponent />
    
    <h1 class="main-title">Notas</h1>
    <Toolbar>
      <template #start>
          <ButtonComponent @click="visible = true" label="Nueva" icon="pi pi-plus" class="mr-2" />
      </template>

      <template #end>
          <ButtonComponent @click="logout" label="Cerrar Sesión" icon="pi pi-times" class="mr-2" severity="warning"/>
      </template>
    </Toolbar>

    <section class="notes-section" v-if="notes.length > 0">
      <CardComponent v-for="note in notes" :key="note.id" >
        <template #title> Nota # {{ note.id }} </template>
        <template #content>
           {{ note.content }}
        </template>
      </CardComponent>    
    </section>
  
    <h2 v-else> Aún no has creado ninguna nota </h2>

    <Dialog v-model:visible="visible" modal header="Nueva nota" :style="{ width: '50vw' }">
        <form @submit.prevent="handleSubmit" class="flex flex-column gap-3">
          <span class="flex gap-2">
              <InputText v-model="content.valor" type="text" placeholder="Contenido" :class="!content.valor && content.showErrorMessage? 'p-invalid w-100': 'w-100'" />
              <InlineMessage v-if="!content.valor && content.showErrorMessage" severity="error">{{ errorMessage }}</InlineMessage>
          </span>
          <ButtonComponent type="submit" label="Crear" :loading="loading" />
        </form>
    </Dialog>

  </div>
</template>

<script lang="ts" setup>
import { useToast } from 'primevue/usetoast';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth'
import { INote } from '@/interfaces/INote'
import Toolbar from 'primevue/toolbar';
import Dialog from 'primevue/dialog';
import InlineMessage from 'primevue/inlinemessage';

const toast = useToast();
const authStore = useAuthStore(); 
const router = useRouter()
const content = ref({ valor: '', showErrorMessage:false })
const errorMessage = 'Campo requerido'

let notes= ref<INote[]>([])
let visible = ref(false)
const loading = ref(false)

onMounted(async () => { 
  toast.add({ severity: 'success', summary: 'Éxito', detail: 'Bienvenido(a)', life: 5000 });

  try {
    notes.value = await getNotes(); 
  } catch (error) {
    console.log(error)
  }

})

const getNotes = async () => {
  const response = await fetch('http://127.0.0.1:8000/api/note', {
    method: 'GET', 
    headers: {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${authStore.bearerToken}`,
    },
  })

  return await response.json()
}

const logout = () => {
  authStore.logout()
  router.push('/login')
}

const handleSubmit =async () => {

  if (!content.value.valor) content.value.showErrorMessage = true

  try {
    //Evitar que se haga la peticion si algún valor no se ha ingresado
    if (!content.value.valor) return

    loading.value = true
    const response = await fetch('http://127.0.0.1:8000/api/note', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authStore.bearerToken}`,
        },
        body: JSON.stringify({ content:content.value.valor })
    })

    loading.value = false

    const result = await response.json(); 

    if (result.status == false) {
        toast.add({ severity: 'error', summary: 'Mensaje de error', detail: result.errors.email[0], life: 5000 });
    } else { 
      toast.add({ severity: 'success', summary: 'Éxito', detail: result.message, life: 5000 });
      notes.value = await getNotes(); 
      visible.value = false
      content.value = { valor: '', showErrorMessage:false }
    }

  } catch (error) {
    console.log(error);
    loading.value = false
    toast.add({ severity: 'error', summary: 'Mensaje Error', detail: 'Error al intentar crear la nota', life: 5000 });
  }

}
</script>

<style scoped>
  .main-title {
    text-align: center;
  }

  .p-inputtext {
    width: 100%;
  }

</style>
