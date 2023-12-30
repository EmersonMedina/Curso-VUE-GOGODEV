<template>
    <h1>Login</h1>
    <input type="text" placeholder="email" v-model="email" id="email"> <br/>
    <input type="text" placeholder="password" v-model="password" id="password">
    <button @click="login" id="login_btn">Login</button>
    <p v-if="!success">Wrong email or password</p>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { useAuth } from '@/store/useAuth';
    import router from '@/router';
    
    const store = useAuth()

    const email = ref('')
    const password = ref('')
    const success = ref(true)

    const login = async () => {
        success.value = await store.login(email.value, password.value)
        if (store.isAuthenticated) router.push('/')
    }
</script>

<style lang="scss" scoped>

</style>