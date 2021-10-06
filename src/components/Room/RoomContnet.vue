<template>
  <div class="continer">
    <search-bar />
    <!-- 중앙 css 정리 및 레이아웃 해야함 -->
    <div class="RoomCardContent">
      <room-card />
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
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.RoomCardContent {
  overflow-x: scroll;
  height: 600px;
  width: 100%;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
