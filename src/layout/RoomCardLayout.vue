<template>
    <div class="cardLayout">
        <div>
            <slot name="roomHead">Head</slot>
        </div>
        <div>
            <slot name="roomBody">Body</slot>
        </div>
        <div>
            <slot name="roomFoot">Foot</slot>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cardLayout {
    border: 1px solid blue;
    margin: 10px;
    height: 180px;
    width: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>
