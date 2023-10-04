<template>
    <h4>Porcentaje completado: {{ percentage }}%</h4>
</template>

<script lang="ts">
    import { defineComponent} from 'vue';

    export default defineComponent({
        data() {
            const percentage = 0

            return { percentage }
        }, 
        methods: {
            recalculate () { 
                //Actualizar el valor del porcentaje a través del servicio
                this.percentage = 42
            }
        }, 
        mounted() {
            this.percentage = 24
        }
    })
</script>

<style scoped>

</style>