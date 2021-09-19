<template>
    <div class="continer">
        <!-- 중앙 css 정리 및 레이아웃 해야함 -->
        <room-card v-for="item in 10" :key="item.id" />
    </div>
</template>

<script>
import RoomCard from "./RoomCard.vue";
export default {
    components: { RoomCard },
};
</script>

<style lang="scss">
.continer {
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
</style>
