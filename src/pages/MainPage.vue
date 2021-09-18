<template>
    <main-form>
        <template v-slot:topLayout>Hello World 2</template>
        <template v-slot:bodyLayout>Hello World 3</template>
        <template v-slot:footerLayout>Hello World 4</template>
    </main-form>
</template>

<script>
import MainForm from "../layout/MainForm.vue";

export default {
    components: { MainForm },
};
</script>

<style></style>
