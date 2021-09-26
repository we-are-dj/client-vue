import instance from "../axios";
export default {
    test: (params) => {
        return instance
            .get(`/v1/music/rooms?pageNo=${params}`)
            .then((res) => res.data)
            .catch((err) => {
                console.error(err, "API CALL FAIL");
            });
    },
};
