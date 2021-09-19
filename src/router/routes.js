const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import("@/pages/Login.vue")
    },
];

export default routes;
