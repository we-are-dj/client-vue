<template>
  <div class="cardLayout">
    <div style="width:100%;">
      <slot name="roomHead">Head</slot>
    </div>
    <div style="width:100%;">
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
  border: 2px solid #ddd;
  margin: 10px;
  height: 180px;
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
