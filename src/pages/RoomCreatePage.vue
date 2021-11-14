<template>
    <main-form>
        <template v-slot:topLayout>
            <nav-bar />
        </template>
        <template v-slot:bodyLayout>
            <room-create />
        </template>
        <template v-slot:footerLayout>
            <footer-bar />
        </template>
    </main-form>
</template>

<script>
import MainForm from "@/layout/MainForm.vue";
import NavBar from "@/components/Nav/NavBar.vue";
import FooterBar from "@/components/Foot/FooterBar.vue";
import RoomCreate from "@/components/Room/RoomCreate.vue";
export default {
    components: { MainForm, NavBar, FooterBar, RoomCreate },
};
</script>

<style></style>
