<template>
    <NuxtLayout name="proyects">
        <h1>Proyect number: {{ proyectId }}</h1>
        <button @click="changeLayout">Change layout</button>
    </NuxtLayout>
</template>

<script lang="ts" setup>
definePageMeta({
    layout:"proyects"
})

const route = useRoute() 
const proyectId = ref()
proyectId.value = route.params.id

const changeLayout = () => {
    setPageLayout("default")
}
</script>

<style>

</style>