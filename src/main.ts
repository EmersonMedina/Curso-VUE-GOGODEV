import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.directive("font-size", {
  beforeMount: (el) => {
    el.style.fontSize = "70px";
  },
});

app.directive("custom-size", {
  beforeMount: (el, binding) => {
    el.style.fontSize = `${binding.value}px`;
  },
});

app.directive("custom-size2", {
  beforeMount: (el, binding) => {
    switch (binding.arg) {
      case "small":
        el.style.fontSize = "20px";
        break;
      case "medium":
        el.style.fontSize = "30px";
        break;
      case "large":
        el.style.fontSize = "40px";
        break;
      default:
        el.style.fontSize = "10px";
    }
  },
});

app.directive("custom-font", {
  beforeMount: (el, binding) => {
    let size = 18;
    if (binding.modifiers.sm) size = 10;
    else if (binding.modifiers.lg) size = 25;
    else if (binding.modifiers.xxl) size = 72;

    if (binding.modifiers.red) el.style.color = "red";
    else if (binding.modifiers.green) el.style.color = "green";
    else if (binding.modifiers.blue) el.style.color = "blue";

    el.style.fontSize = `${size}px`;
  },
});

app.mount("#app");
