<template>
   <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/services">Services</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          <li><NuxtLink to="/proyects">Proyects</NuxtLink></li>
        </ul>
      </nav>

      <slot />
</template>

<script lang="ts" setup>

</script>

<style>

</style>