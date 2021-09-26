<template>
    <room-card-layout style="margin: 0 auto; margin-top: 10px;">
        <template v-slot:roomHead>
            <div style="display:flex;  width:100%;">
                <div style="width:50%; text-align:center;">Title</div>
                <div style="width:50%; text-align:center;">1/6</div>
            </div>
        </template>
        <template v-slot:roomBody>
            <div style="display:flex;">
                <div
                    style="width:40%; border:1px solid red; height:120px; text-align:center;"
                >
                    썸네일
                </div>
                <div
                    style="width:60%; border:1px solid black; text-align:center;"
                >
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

<style></style>
