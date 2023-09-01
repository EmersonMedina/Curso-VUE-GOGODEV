<template>
    <div class="flex flex-column justify-content-center align-items-center container">
        <ToastComponent />
        <CardComponent>
            <template #title>Registro</template>
            <template #content>
                <form @submit.prevent="handleSubmit" class="flex flex-column gap-3">
                    <span class="flex gap-2">
                        <InputText v-model="name.valor" type="text" placeholder="Nombre" :class="!name.valor && name.showErrorMessage? 'p-invalid': ''" />
                        <InlineMessage v-if="!name.valor && name.showErrorMessage" severity="error">{{ errorMessage }}</InlineMessage>
                    </span>

                    <span class="flex gap-2">
                        <InputText v-model="email.valor" type="email" placeholder="Email" :class="!email.valor && email.showErrorMessage? 'p-invalid': ''" />
                        <InlineMessage v-if="!email.valor && email.showErrorMessage" severity="error">{{ errorMessage }}</InlineMessage>
                    </span>

                    <span class="flex gap-2">
                        <PasswordComponent v-model="password.valor" placeholder="Password" toggleMask :feedback="true"  :class="!password.valor && password.showErrorMessage? 'p-invalid': ''"/>
                        <InlineMessage v-if="!password.valor && password.showErrorMessage" severity="error">{{ errorMessage }}</InlineMessage>
                    </span>
                    <ButtonComponent type="submit" label="Registrarme" :loading="loading"/>
                </form>

                
                <footer class="mt-3 card-content__footer">
                    <RouterLink to="/login">¿Ya tienes cuenta? Inicia Sesión</RouterLink>
                </footer>

            </template>
            
        </CardComponent>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast';
import InlineMessage from 'primevue/inlinemessage';

const toast = useToast();

const errorMessage = 'Valor requerido'
const loading = ref(false)

const name = ref({ valor: '', showErrorMessage:false })
const email = ref({ valor: '', showErrorMessage:false })
const password = ref({ valor: '', showErrorMessage:false })

const handleSubmit = async () => {

try {
    //Validaciones
    if (!name.value.valor) name.value.showErrorMessage = true
    if (!email.value.valor) email.value.showErrorMessage = true
    if (!password.value.valor) password.value.showErrorMessage = true

    //Evitar que se haga la peticion si algún valor no se ha ingresado
    if (!name.value.valor || !email.value.valor || !password.value.valor) return

    loading.value = true
    const response = await fetch('http://127.0.0.1:8000/api/auth/register', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ name: name.value.valor, email:email.value.valor, password:password.value.valor })
    })

    loading.value = false
    
    const result = await response.json(); 

    if (result.status == false) {
        toast.add({ severity: 'error', summary: 'Mensaje de error', detail: result.errors.email[0], life: 5000 });
    } else { 
        toast.add({ severity: 'success', summary: 'Éxito', detail: result.message, life: 5000 });
    }

} catch (error) {
    console.log(error);
    loading.value = false
    toast.add({ severity: 'error', summary: 'Mensaje Error', detail: 'Error al intentar registrar el usuario', life: 5000 });
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