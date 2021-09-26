<template>
    <div>
        <table>
            <thead></thead>
            <tbody>
                <tr v-for="item in getTestList" :key="item.roomId">
                    <td>
                        {{ item.roomName }}
                    </td>
                    <td>
                        {{ item.roomUserCount }}
                    </td>
                    <td>
                        {{ nullCheck(item.musicRoomNo) }}
                    </td>
                </tr>
            </tbody>
            <tfoot></tfoot>
        </table>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            nullPoint: "",
        };
    },
    computed: {
        ...mapGetters(["getTestList"]),
    },
    methods: {
        testFunction() {
            console.log("HI");
        },
        callTestList(params) {
            this.$store.dispatch(`test`, params);
            console.log(params);
        },
        nullCheck(params) {
            if (params === null) {
                this.nullPoint = "NULL";
            }
            return this.nullPoint;
        },
    },

    created() {
        this.callTestList(1);
        this.testFunction();
    },
};
</script>

<style scoped lang="scss">
td {
    padding: 10px;
}
</style>
