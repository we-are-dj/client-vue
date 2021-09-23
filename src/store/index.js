import { createStore } from "vuex";

import state from "./state";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
// import login from "./login";
export default createStore({
  //   modules: {
  //     login,
  //   },
  state,
  actions,
  mutations,
  getters,
});
