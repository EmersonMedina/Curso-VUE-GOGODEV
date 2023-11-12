import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import pluginExample from '../plugins/example'

const app = createApp(App)
app.use(pluginExample, { message: 'HelloWorld'})
app.mount('#app')
