import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
// import VueCookies from "vue-cookies";
import VueCookies from "vue3-cookies";
import "@/style";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(VueCookies, {
    expireTImes: "30d",
    path: "/",
});
//app.use(VueCookies);
app.mount("#app");

window.Kakao.init("6e37db0865ec5dd827ed639db14424c3"); // 카카오에서 발급 받은 앱키
