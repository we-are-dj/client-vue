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
];

export default routes;
