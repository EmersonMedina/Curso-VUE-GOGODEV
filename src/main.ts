import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Toast from 'primevue/toast';
import Password from 'primevue/password';

import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import "primevue/resources/themes/lara-dark-teal/theme.css" //theme
import "primevue/resources/primevue.min.css"; //core CSS

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(PrimeVue, { styled: true})
app.use(ToastService)
app.component('InputText', InputText)
app.component('ButtonComponent', Button)
app.component('CardComponent', Card)
app.component('ToastComponent', Toast)
app.component('PasswordComponent', Password)
app.mount('#app')