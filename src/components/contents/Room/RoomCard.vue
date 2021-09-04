<template>
    <div class="roomCardSection">
        <div class="roomCard">
            <!-- 방제목 및 인원수 -->
            <div></div>
            <!-- 내용, 재생중인 곡 및 썸네일 -->
            <div>
                <!-- 내용 -->
                <div>
                    힙합
                </div>
                <!-- 재생중인 곡 -->
                <div>
                    힙합곡
                </div>
                <!-- 썸네일 순서가 바뀔 수 있음 혹은 뺄 수 있음. -->
                <div>
                    힙합이미지
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.roomCardSection {
    width: 100%;
    margin: 10px;

    & .roomCard {
        width: 100%;
        border: 1px solid red;
    }
}
</style>
