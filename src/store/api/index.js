import axios from "axios";

const API = axios.create({
    headers: { prop_value: "4c964fe9-c048-43d6-b7d4-8063d32d8124" },
    baseURL: `server.wearedj.club`,
});

export default {
    test: () => {
        return new Promise((resolve, reject) => {
            axios
                .get(`${API.baseURL}/v1/music/rooms`)
                .then((data) => resolve(data))
                .catch((err) => {
                    reject(err);
                });
        });
    },
};
