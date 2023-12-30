import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuth = defineStore('useAuth', () => {
    const isAuthenticated = ref(false)
    
    function login (email: string, password: string):boolean {
        if (email === 'admin@admin.com' && password === 'admin') {
            isAuthenticated.value = true
            return true
        }
        else {
            isAuthenticated.value = false
            return false
        }
    }
  
    return { isAuthenticated, login }
  })

