<template>
    <!-- <img v-lazy="{
        src: 'https://picsum.photos/1280/800', 
        loading: 'loading.gif', //<- NO debe superar los 500kb de peso para que funcione de forma efectiva
        error: 'loading.gif', 
        delay: 500
    }" /> -->

    <img v-lazy="{ src: lazyOptions.src, lifecycle: lazyOptions.lifecycle, delay: lazyOptions.delay}" lazy="loading"/>
</template>

<script lang="ts" setup>
    import { ref, VNode } from 'vue'

    const lazyOptions = ref({ 
        src: 'https://picsum.photos/1280/800',
        delay: 500, 
        lifecycle: {
            loading: (el: VNode) => { 
                console.log('cargando imagen', el)
            }, 
            error: (el: VNode) => {
                console.log('error en la carga', el)
            }, 
            loaded: (el: VNode) => { 
                console.log('imagen cargada', el)
            }
        }
    })

</script>

<style scoped>
    img[lazy=loading]{ 
        background-color: green;
        width: 500px;
    }
    
    /* img[lazy=loaded]{ 
        
    }

    img[lazy=error]{ 
        
    } */
</style>