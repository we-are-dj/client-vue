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
    created() {
        const callTestList = (pageNo) => {
            this.$store.dispatch(`test`);
            console.log(pageNo);
        };
        console.log("==>", callTestList);
        callTestList(1);
        this.testFunction();
    },
};
</script>

<style></style>
