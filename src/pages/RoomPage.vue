<template>
    <div>
        <table>
            <thead></thead>
            <tbody>
                <tr v-for="item in 10" :key="item.id">
                    <td>
                        1
                    </td>
                    <td>
                        2
                    </td>
                    <td>
                        3
                    </td>
                </tr>
            </tbody>
            <tfoot></tfoot>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nullPoint: "",
        };
    },
    computed: {},
    methods: {},

    created() {},
};
</script>

<style scoped lang="scss">
td {
    padding: 10px;
}
table {
    width: 90%;
    margin: 100px auto;
    text-align: center;
    td {
        border: 1px solid black;
    }
}
</style>
