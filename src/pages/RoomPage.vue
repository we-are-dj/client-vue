<template>
    <div>
        {{ getTestList }}
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(["getTestList"]),
    },
    methods: {
        testFunction() {
            console.log("HI");
        },
    },
    create() {
        const callTestList = () => {
            this.$store.dispatch("test");
        };
        console.log("==>", callTestList);
        callTestList();
        this.testFunction;
    },
};
</script>

<style></style>
