<template>
    <div>
        <div class="navGation">
            <slot name="Navgation"></slot>
        </div>
        <div class="mainBody">
            <slot name="MainBody">
                <main-contents />
            </slot>
        </div>
        <div class="footer">
            <slot name="Footer"> </slot>
        </div>
    </div>
</template>

<script>
import MainContents from "../components/contents/MainContents.vue";
export default {
    components: { MainContents },
};
</script>

<style scoped lang="scss">
.navGation {
    background: #ddd;
    height: 80px;
    display: flex;
    align-items: center;
    width: 100%;
}
.mainBody {
    display: flex;
    justify-content: center;
    width: 100%;
    background: #f9f9f9;
    height: 100%;
    min-height: 620px;
    margin-bottom: 10px;
}
.footer {
    display: flex;
    background: #d9d9d9;
    height: 65px;
}
</style>
