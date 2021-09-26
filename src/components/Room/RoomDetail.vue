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
};
</script>

<style></style>
