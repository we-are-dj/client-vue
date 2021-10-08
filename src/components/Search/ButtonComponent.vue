<template>
    <button @click="clickEvent(room)">
        <slot name="buttonName"></slot>
    </button>
</template>

<script>
import { mapActions } from "vuex";
export default {
    props: {
        room: {
            type: Object,
        },
    },
    methods: {
        ...mapActions(["roomCreate"]),
        async clickEvent(params) {
            console.log("this.name", this.room);
            try {
                await this.roomCreate(params);
                //this.$store.dispatch("roomCreate", params);
            } catch (err) {
                console.error(err, "API CALL FAILURE");
            }
        },
    },
};
</script>

<style lang="scss" scoped>
button {
    background: white;
    border: 2px solid #ddd;
    border-radius: 5px;
    padding: 5px;
    width: 80px;
    font-size: 14px;
    margin: 3px;
    cursor: pointer;
    margin-left: 20px;
}
button:active {
    background: pink;
}
</style>
