import { defineStore } from "pinia";

export const useExample = defineStore( 'useExample', { 
    state: () => {
        return {
            count: 1
        }
    }, 
    actions: {
        init() {
            const initCount = localStorage.getItem('count')

            if (initCount) {
                this.count = parseInt(initCount)
            }
        }, 

        increment() {
            this.count++
            localStorage.setItem('count', this.count.toString())
        }
    }
})