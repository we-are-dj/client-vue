import api from "./api";
export default {
    test({ commit }) {
        return api
            .test()
            .then((data) => commit("testList", data))
            .catch((err) => {
                console.error(err, "testAPI Fail");
            });
    },
};
