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

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";

export default defineComponent({
  name: "PostDetail",
  props: {
    title: { type: String, required: true },
    description: {
      type: String,
      required: false,
      default: "Post sin contenido",
    },
  },
  emits: ["sayHi"],
  setup(props, { emit }) {
    const handleClick = () => {
      emit("sayHi", message.value);
    };

    let message: Ref<string> = ref("");
    return { props, message, handleClick };
  },
});
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
