const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import("@/pages/LoginPage.vue")
    },
    {
        path: '/main',
        name: 'Main',
        component: () => import("@/pages/MainPage.vue")
    },
];

export default routes;
