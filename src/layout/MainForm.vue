<template>
    <div style="border:1px solid red;">
        <!-- 화면 전체 레이아웃 설정해줄 예정 -->
        <div style="display:flex; align-items:center; flex-direction:column;">
            <div class="NavBar">
                <slot name="topLayout"></slot>
            </div>
            <div class="mainContainer">
                <slot name="bodyLayout"></slot>
            </div>
            <div>
                <slot name="footerLayout"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mainContainer {
    display: flex;
    justify-content: center;
    width: 80%;
}
.NavBar{
    width:100%;
    height: 70px;
}
</style>
