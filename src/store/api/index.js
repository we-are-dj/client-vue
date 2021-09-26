import instance from "../axios";
export default {
    test: () => {
        console.log("==>API");
        return new Promise((resolve, reject) => {
            instance
                .get(`/v1/music/rooms`)
                .then((data) => resolve(data))
                .catch((err) => {
                    reject(err);
                });
        });
    },
};
