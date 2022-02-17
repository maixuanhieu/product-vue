import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/css/style.css'
import VueAxios from "vue-axios";
import axios from "axios";


const app = createApp(App).use(store).use(router)
app.use(VueAxios, { $request: axios})
app.mount("#app")


