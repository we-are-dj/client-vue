<template>
    <div class="searchContainer">
        <input-component />
        <button-component :clickEvent="clickEvent">
            <template v-slot:buttonName>
                검색
            </template>
        </button-component>
    </div>
</template>

<script>
import ButtonComponent from "./ButtonComponent.vue";
import InputComponent from "./InputComponent.vue";

export default {
    components: { ButtonComponent, InputComponent },
    methods: {
        clickEvent(text) {
            console.log(text);
        },
    },
};
</script>

<style lang="scss" scoped>
.searchContainer {
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
}
</style>
