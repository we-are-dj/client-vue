<template>
    <div class="continer">
        <search-bar />
        <!-- 중앙 css 정리 및 레이아웃 해야함 -->
        <div class="RoomCardContent">
            <room-card v-for="item in 10" :key="item.id" />
        </div>
    </div>
</template>

<script>
import SearchBar from "../Search/SearchBar.vue";
import RoomCard from "./RoomCard.vue";
export default {
    components: { RoomCard, SearchBar },
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
.RoomCardContent{
    overflow-x:scroll;
    height:600px;
    width:100%;
}
</style>
