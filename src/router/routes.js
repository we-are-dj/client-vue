const routes = [
    {
        path: "/",
        name: "Login",
        component: () => import("@/pages/LoginPage.vue"),
    },
    {
        path: "/main",
        name: "Main",
        component: () => import("@/pages/MainPage.vue"),
    },
    {
        path: "/room", // :id 는 동적라우팅
        // name: "room", // 솔직히 name router 쓸거 아니면 name 없어도 됨.
        component: () => import("@/pages/RoomPage.vue"),
    },
    {
        path: "/room/create",
        component: () => import("@/pages/RoomCreatePage.vue"),
    },
];

export default routes;
