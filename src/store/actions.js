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
};
