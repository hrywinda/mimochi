import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";

import "@/styles/base.scss";
import "@/styles/index.scss";

const app = createApp(App);

AOS.init();

app.use(router);
app.mount("#app");
