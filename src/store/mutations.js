export default {
    testList(state, data) {
        console.log(data);
        state.testItems = data;
    },
    setRoomCreate(state, data) {
        console.log(data);
        console.log(state);
    },
};
