<template>
  <room-card-layout
    class="RoomCardLayout"
    v-for="item in getTestList"
    :key="item.roomId"
  >
    <template v-slot:roomHead>
      <div class="title-box">
        <div class="title">{{ item.roomName }}</div>
        <div class="join-person">{{ item.roomUserCount }}</div>
      </div>
    </template>
    <template v-slot:roomBody>
      <div class="RoomContentsBox">
        <div class="RoomContentsThubNail">썸네일</div>
        <div class="RoomContents">
          {{ nullCheck(item.musicRoomNo) }}
          <div>
            <router-link to="/room">
              <!-- 라우팅 주소 동적으로 할당할 예정. -->
              <button>입장</button>
            </router-link>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:roomFoot>FootItem</template>
  </room-card-layout>
</template>

<script>
import RoomCardLayout from "../../layout/RoomCardLayout.vue";
import { mapGetters } from "vuex";
export default {
  components: { RoomCardLayout },
  data() {
    return {
      nullPoint: "",
    };
  },
  computed: {
    ...mapGetters(["getTestList"]),
  },
  methods: {
    callTestList(params) {
      this.$store.dispatch(`test`, params);
      console.log(params);
    },
    nullCheck(params) {
      if (params === null) {
        this.nullPoint = "NULL";
      }
      return this.nullPoint;
    },
  },

  created() {
    this.callTestList(3);
  },
};
</script>

<style lang="scss" scoped>
@import "./RoomCard.scss";
</style>
