import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as bootstrap from '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/main.css';


const app = createApp(App)

app.use(router)
app.provide('bootstrap', bootstrap )
app.mount('#app')
