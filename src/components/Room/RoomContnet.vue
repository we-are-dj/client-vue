<template>
    <div class="continer">
        <search-bar />
        <router-link to="/room/create">
            <button>방만들기</button>
        </router-link>
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
            this.$store.dispatch(`rommListCall`, params);
            console.log(params);
        },
    },

    created() {
        this.callTestList(1);
    },
};
</script>

<style lang="scss" scoped>
.continer {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    button{
        width: 85px;
        height: 35px;
        background: rgb(24, 23, 23);
        color: #fff;
        font-size: .9em;
        border: none;
        outline: none;
        border-radius: 10px;
        box-shadow: 2px 2px 5px #ddd;
        cursor: pointer;
    }
}
.RoomCardContent {
    overflow-x: scroll;
    width: 100%;
    height: 100vh;
    background: rgb(250, 250, 250);
    box-shadow: inset 2px 2px 10px rgb(212, 212, 212);
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
}
</style>
