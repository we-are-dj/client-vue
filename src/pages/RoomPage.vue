<template>
  <div>
    <room-card />
  </div>
</template>

<script>
import RoomCard from "../components/Room/RoomCard.vue";
export default {
  components: { RoomCard },
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
  border: 1px solid red;
  td {
    border: 1px solid black;
  }
}
</style>
