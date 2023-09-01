<template>
    <div class="flex flex-column justify-content-center align-items-center container">
        <ToastComponent />
        <CardComponent>
            <template #title>Inicio Sesión</template>
            <template #content>
                <form @submit.prevent="handleSubmit" class="flex flex-column gap-3">
                    <span class="flex gap-2">
                        <InputText v-model="email.valor" type="text" placeholder="Email" :class="!email.valor && email.showErrorMessage? 'p-invalid': ''" />
                        <InlineMessage v-if="!email.valor && email.showErrorMessage" severity="error">{{ errorMessage }}</InlineMessage>
                    </span>

                    <span class="flex gap-2">
                        <PasswordComponent v-model="password.valor" placeholder="Password" toggleMask :feedback="false"  :class="!password.valor && password.showErrorMessage? 'p-invalid': ''"/>
                        <InlineMessage v-if="!password.valor && password.showErrorMessage" severity="error">{{ errorMessage }}</InlineMessage>
                    </span>
                    <ButtonComponent type="submit" label="Iniciar Sesión" :loading="loading" />
                </form>

                
                <footer class="mt-3 card-content__footer">
                    <RouterLink to="/register">¿No tienes cuenta? Registrate</RouterLink>
                </footer>
            </template>
            
        </CardComponent>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';
import InlineMessage from 'primevue/inlinemessage';

const toast = useToast()
const router = useRouter()
const authStore = useAuthStore()

const errorMessage = 'Valor requerido'
const loading = ref(false)

const email = ref({ valor: '', showErrorMessage:false })
const password = ref({ valor: '', showErrorMessage:false })

const handleSubmit =async () => {

    if (!email.value.valor) email.value.showErrorMessage = true
    if (!password.value.valor) password.value.showErrorMessage = true

    try {
    //Validaciones
    if (!email.value.valor) email.value.showErrorMessage = true
    if (!password.value.valor) password.value.showErrorMessage = true

    //Evitar que se haga la peticion si algún valor no se ha ingresado
    if (!email.value.valor || !password.value.valor) return

    loading.value = true
    const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ email:email.value.valor, password:password.value.valor })
    })

    loading.value = false
    
    const result = await response.json(); 

    if (result.status == false) {
        toast.add({ severity: 'error', summary: 'Mensaje de error', detail: result.errors.email[0], life: 5000 });
    } else { 
        authStore.setBearerToken(result.token)
        router.push('/')
    }

} catch (error) {
    console.log(error);
    loading.value = false
    toast.add({ severity: 'error', summary: 'Mensaje Error', detail: 'Error al intentar iniciar sesión', life: 5000 });
}

}
</script>

<style scoped>
    .container {
        height: 100vh;
    }

    .p-card-content {
        padding: 0;
    }

    .card-content__footer a{
        cursor: pointer;
        text-decoration: none;
    }
</style>