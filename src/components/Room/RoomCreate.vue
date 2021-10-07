<template>
    <div style="margin:100px;">
        <div>
            <label for="roomName">방제목 : </label>
            <input
                id="roomName"
                type="text  "
                placeholder="방 제목을 입력해주세요."
            />
        </div>
        <div>
            <button-component>
                <template v-slot:buttonName>생성</template>
            </button-component>
        </div>
        <div></div>
    </div>
</template>

<script>
import ButtonComponent from "../Search/ButtonComponent.vue";

export default {
    components: { ButtonComponent },
};
</script>

<style></style>
