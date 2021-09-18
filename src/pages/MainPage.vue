<template>
    <main-form>
        <template v-slot:topLayout>
            <nav-bar />
        </template>
        <template v-slot:bodyLayout>
            <room-contnet />
        </template>
        <template v-slot:footerLayout>
            <footer-bar />
        </template>
    </main-form>
</template>

<script>
import FooterBar from "../components/Foot/FooterBar.vue";
import NavBar from "../components/Nav/NavBar.vue";
import RoomContnet from "../components/Room/RoomContnet.vue";
import MainForm from "../layout/MainForm.vue";

export default {
    components: { MainForm, RoomContnet, NavBar, FooterBar },
};
</script>

<style></style>
