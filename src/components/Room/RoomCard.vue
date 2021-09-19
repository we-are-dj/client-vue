<template>
    <room-card-layout>
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
