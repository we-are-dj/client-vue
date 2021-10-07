import api from "./api";
export default {
    test({ commit }, params) {
        return api
            .test(params)
            .then((data) => commit("testList", data.data))
            .catch((err) => {
                console.error(err, "testAPI Fail");
            });
    },
    roomCreate({ commit }, params) {
        return api
            .roomCreate(params)
            .then((data) => commit("setRoomCreate", data.data))
            .catch((err) => {
                console.error(err, "roomCreate FAIL");
            });
    },
};
