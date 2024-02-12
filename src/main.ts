import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";

import "virtual:svg-icons-register";
import "uno.css";
import { setupStore } from "./store";
const app = createApp(App);

//全局注册 状态管理(store)
setupStore(app);

app.use(ElementPlus);
app.mount("#app");
