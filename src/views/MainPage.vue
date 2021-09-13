<template>
    <main-layout>
        <template v-slot:Navgation>
            <nav-gation />
        </template>
        <template v-slot:MainBody>
            <router-view></router-view>
        </template>
        <template v-slot:Footer>
            Footer
        </template>
    </main-layout>
</template>

<script>
import NavGation from "../components/navgation/NavGation.vue";
import MainLayout from "../Layout/MainLayout.vue";

export default {
    components: { MainLayout, NavGation },
};
</script>

<style></style>
