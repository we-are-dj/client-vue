import api from "./api";
export default {
    rommListCall({ commit }, params) {
        return api
            .rommListCall(params)
            .then((data) => commit("testList", data.data))
            .catch((err) => {
                console.error(err, "testAPI Fail");
            });
    },
    roomCreate({ params }) {
        return api.roomCreate(params);
    },
};
