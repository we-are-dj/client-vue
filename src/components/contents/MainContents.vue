<template>
    <div class="contentMain">
        <div class="contentSection">
            <!-- Search Line-->
            <div class="searchBox">
                <div>
                    <!-- 상황이 되면 input 도 쪼개서 컴포넌트화 할 예정 -->
                    <label for="searchInput"></label>
                    <input
                        type="text"
                        id="searchInput"
                        placeholder="제목을 검색해주세요."
                        maxlength="30"
                    />
                    <button>Search</button>
                </div>
            </div>

            <!-- Room Box -->
            <div class="roomBox">
                <!-- Room Card  추후 컴포넌트 따로 뺄까 함.-->
                <div class="roomCard">
                    <room-card v-for="item in 10" :key="item.id" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RoomCard from "./Room/RoomCard.vue";
export default {
    components: { RoomCard },
};
</script>

<style scoped lang="scss">
.contentMain {
    display: flex;
    justify-content: center;
    width: 80%;
}
.contentSection {
    width: 100%;
    & .searchBox {
        display: flex;
        justify-content: center;
        width: 100%;
        margin: 20px 0 20px 0;
    }
    & .roomBox {
        overflow: scroll;
        height: 550px;
        width: 100%;
        display: flex;
        justify-content: center;
        & .roomCard {
            width: 60%;
        }
    }
}
</style>
