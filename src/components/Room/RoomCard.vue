<template>
    <room-card-layout class="RoomCardLayout">
        <template v-slot:roomHead>
            <div class="title-box">
                <div class="title">Title</div>
                <div class="join-person">1/6</div>
            </div>
        </template>
        <template v-slot:roomBody>
            <div class="RoomContentsBox">
                <div class="RoomContentsThubNail">
                    썸네일
                </div>
                <div class="RoomContents">
                    내용
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
};
</script>

<style lang="scss" scoped>
@import "./RoomCard.scss";
</style>
