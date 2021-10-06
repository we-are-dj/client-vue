<template>
  <div class="continer">
    <search-bar />
    <!-- 중앙 css 정리 및 레이아웃 해야함 -->
    <div class="RoomCardContent">
      <!-- 이 부분에서 인피니티 스크롤을 구현해주어야함. -->
      <room-card
        :list="getTestList"
        name="roomName"
        count="roomUserCount"
        roomNo="musicRoomNo"
      />
    </div>
  </div>
</template>

<script>
import SearchBar from "../Search/SearchBar.vue";
import RoomCard from "./RoomCard.vue";
import { mapGetters } from "vuex";
export default {
  components: { RoomCard, SearchBar },
  computed: {
    ...mapGetters(["getTestList"]),
  },
  methods: {
    callTestList(params) {
      this.$store.dispatch(`test`, params);
      console.log(params);
    },
  },

  created() {
    this.callTestList(1);
  },
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
