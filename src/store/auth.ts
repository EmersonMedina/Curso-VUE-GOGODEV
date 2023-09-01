import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth',  () => {
    const bearerToken = ref('')

    function setBearerToken(token: string) {
        bearerToken.value = token
    }

    function getBearerToken() {
        return bearerToken.value
    }

    function logout() {
        bearerToken.value = ''
    }

    return { bearerToken, setBearerToken, getBearerToken, logout}
})