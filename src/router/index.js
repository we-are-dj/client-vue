import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
// import store from "../store/login";
// import VueCookies from "vue3-cookies";

const router = createRouter({
  history: createWebHistory(),
  routes,
  //   VueCookies,
});

// router.beforeEach(async (to, from, next) => {
//   if (
//     VueCookies.get("accesstoken") === null &&
//     VueCookies.get("refreshToken") !== null
//   ) {
//     await store.dispatch("refreshToken");
//   }
//   if (VueCookies.get("accessToken")) {
//     return next();
//   }
//   if (
//     VueCookies.get("accessToken") === null &&
//     VueCookies.get("refreshToken") === null
//   ) {
//     return next({ name: "Login" });
//   }
//   return next();
// });

export default router;
