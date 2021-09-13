const routes = [
  {
    path: "/",
    component: () => import("@/components/contents/MainContents.vue"),
    // 이름을 가진 라우트 설정시
    // name: main,
    // components: {
    //     name: () => import(),
    // },
  },
  {
    path: "/login",
    component: () => import("@/components/contents/LoginContents.vue"),
  },
  {
    path: "/news",
    component: () => import("@/components/contents/NewsContents.vue"),
  },
];

export default routes;
