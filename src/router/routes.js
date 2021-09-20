const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import("@/pages/Login.vue")
    },
    {
        path: '/main',
        name: 'Main',
        component: () => import("@/pages/MainPage.vue")
    },
];

export default routes;
