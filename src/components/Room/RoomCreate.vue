<template>
    <div style="margin:100px;">
        <div class="flex">
            <label for="name">방제목 : </label>
            <input
                id="name"
                type="text"
                placeholder="방 제목을 입력해주세요."
                v-model="room.roomName"
            />
            <div>
                <button-component :room="room">
                    <template v-slot:buttonName>생성</template>
                </button-component>
            </div>
        </div>
        <div></div>
    </div>
</template>

<script>
import ButtonComponent from "../Search/ButtonComponent.vue";

export default {
    components: { ButtonComponent },
    data() {
        return {
            room: {
                roomName: "",
            },
        };
    },
};
</script>

<style lang="scss" scoped>

</style>
