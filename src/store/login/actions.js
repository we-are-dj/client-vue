// import axios from "axios";
// export default {
//   login: ({ commit }, params) => {
//     return new Promise((resolve, reject) => {
//       axios
//         .post(`url`, params)
//         .then((res) => {
//           commit("loginToken", res.data.auth_info);
//           resolve(res);
//         })
//         .catch((err) => {
//           console.error("loginToken Error =>", err.message);
//           reject(err.message);
//         });
//     });
//   },
//   refreshToken: ({ commit }) => {
//     return new Promise((resolve, reject) => {
//       axios
//         .post(`url`)
//         .then((res) => {
//           commit("refreshToken", res.data.auth_info);
//           resolve(res.data.auth_info);
//         })
//         .catch((err) => {
//           console.error("refreshToken Error => ", err);
//           reject(err.config.data);
//         });
//     });
//   },
//   logout: ({ commit }) => {
//     commit("removeToken");
//     location.reload();
//   },
// };
