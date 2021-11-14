import instance from "../axios";
export default {
    rommListCall: (params) => {
        return instance
            .get(`/v1/music/rooms?pageNo=${params}`)
            .then((res) => res.data)
            .catch((err) => {
                console.error(err, "API CALL FAIL");
            });
    },
    roomCreate: (params) => {
        return instance.post(`v1/music/room`, params);
    },
};
