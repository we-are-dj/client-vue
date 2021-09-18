<template>
    <div>
        <!-- 중앙 css 정리 및 레이아웃 해야함 -->
        <div v-for="item in 10" :key="item.id">
            <room-card />
        </div>
    </div>
</template>

<script>
import RoomCard from "./RoomCard.vue";
export default {
    components: { RoomCard },
};
</script>

<style></style>
