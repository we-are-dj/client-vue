<template>
    <div class="roomCardSection">
        <div class="roomCard">
            <!-- 방제목 및 인원수 -->
            <div class="roomHeader">
                <div class="title">
                    <span>title</span>
                </div>
                <div class="peopleCount">
                    <span>1/6</span>
                </div>
            </div>
            <!-- 내용, 재생중인 곡 및 썸네일 -->
            <div class="roomBody">
                <!-- 썸네일 순서가 바뀔 수 있음 혹은 뺄 수 있음. -->
                <div class="roomLeft">
                    <!-- img 로 바꿀 예정-->
                    <div class="thumbNail">
                        힙합이미지
                    </div>
                </div>
                <div class="roomRight">
                    <!-- 내용 -->
                    <div class="roomContent">
                        내용 설명 TEST TEST TEST TEST TEST TEST TEST TEST TEST
                        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
                    </div>
                    <!-- 재생중인 곡 -->
                    <div class="roomMusic">
                        힙합곡
                    </div>
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
        border: 2px solid #ddd;
        border-radius: 10px;
    }
    & .roomHeader {
        display: flex;
        width: 100%;
        text-align: center;
        border-bottom: 2px solid #ddd;
        margin: 0 0 15px 0;
        & .title {
            width: 50%;
            margin: 5px;
        }
        & .peopleCount {
            width: 50%;
            margin: 5px;
        }
    }
    & .roomBody {
        display: flex;
        width: 100%;
        margin: 5px;
        height: 100px;
        & .roomLeft {
            display: flex;
            align-items: center;
            width: 40%;
            & .thumbNail {
                width: 100%;
                height: 100%;
                border: 1px solid red;
            }
        }
        & .roomRight {
            width: 60%;
            & .roomContent {
                width: 95%;
                word-break: break-all;
                display: flex;
                align-items: center;
                overflow-y: auto;
                overflow-x: hidden;
            }
            & .roomMusic {
                display: flex;
                align-items: center;
                height: 50%;
            }
        }
    }
}
</style>
