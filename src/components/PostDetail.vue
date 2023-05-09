<template>
  <div class="post">
    <h3>{{ props.title }}</h3>
    <p>
      {{ props.description }}
    </p>
    <input type="text" v-model="message" />
    <button @click="handleClick">Say Hi</button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, Ref, ref } from "vue";

const props = defineProps({
  title: { type: String, required: true },
  description: {
    type: String,
    required: false,
    defaultValue: "Post sin contenido",
  },
});

const emits = defineEmits(["sayHi"]);

const handleClick = () => {
  emits("sayHi", message.value);
};

let message: Ref<string> = ref("");
</script>

<style scoped>
.post {
  width: 20%;
  height: 15rem;
  border-radius: 10px;
  background-color: antiquewhite;
  padding: 1rem;
}
</style>
