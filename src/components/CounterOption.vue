<template>
  <h3>{{ counter }}</h3>
  <button @click="incrementCounter">Incrementar</button>
  <button @click="decrementCounter">Disminuir</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import MiCompoenente1 from './MiCompoenente1';
// import MiCompoenente2 from './MiCompoenente2';

export default defineComponent({
  name: "CounterOption",
  // components: { MiCompoenente1, MiCompoenente2, MiCompoenenteN} //En caso de utilizar otros componentes
  data() {
    //Variables reactivas
    let counter = 0;
    return { counter };
  },
  methods: {
    incrementCounter() {
      this.counter++;
    },
    decrementCounter() {
      this.counter--;
    },
  },
});
</script>

<style scoped></style>
