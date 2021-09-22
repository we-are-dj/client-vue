<template>
    <room-card-layout style="margin: 0 auto; margin-top: 10px;">
        <template v-slot:roomHaed></template>
        <template v-slot:roomBody></template>
        <template v-slot:roomFoot></template>
    </room-card-layout>
</template>

<script>
import RoomCardLayout from "../../layout/RoomCardLayout.vue";
export default {
    components: { RoomCardLayout },
};
</script>

<style></style>
