import axios from "axios";

const baseURL = "";

export default {
    test: () => {
        return new Promise((resolve, reject) => {
            axios
                .get(`${baseURL}/menu`)
                .then((data) => resolve(data))
                .catch((err) => {
                    reject(err);
                });
        });
    },
};
