<template>
    <div>
        <button @click="clickEvent('hello')">
            <slot name="buttonName"></slot>
        </button>
    </div>
</template>

<script>
export default {
    props: ["clickEvent"],
};
</script>

<style lang="scss" scoped>
button {
    background: white;
    border: 2px solid #ddd;
    border-radius: 5px;
    padding: 5px;
    width: 80px;
    font-size: 14px;
    margin: 3px;
}
button:active {
    background: pink;
}
</style>
