<template>
  <room-card-layout
    class="RoomCardLayout"
    v-for="item in list"
    :key="item[roomNo]"
  >
    <template v-slot:roomHead>
      <div class="title-box">
        <div class="title">{{ item[name] }}</div>
        <div class="join-person">{{ item[count] }}</div>
      </div>
    </template>
    <template v-slot:roomBody>
      <div class="RoomContentsBox">
        <div class="RoomContentsThubNail">썸네일</div>
        <div class="RoomContents">
          {{ nullCheck(item[roomNo]) }}
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

export default {
  components: { RoomCardLayout },
  props: {
    name: {
      type: String,
      default: "",
    },
    count: {
      type: String,
      default: "",
    },
    roomNo: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
    },
  },
  data() {
    return {
      nullPoint: "",
    };
  },
  methods: {
    nullCheck(params) {
      if (params === null) {
        this.nullPoint = "NULL";
      }
      return this.nullPoint;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./RoomCard.scss";
</style>
