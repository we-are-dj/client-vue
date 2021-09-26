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
<style></style>
