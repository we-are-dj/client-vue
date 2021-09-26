import axios from "axios";
const token = "4c964fe9-c048-43d6-b7d4-8063d32d8124		";
const instance = axios.create({
    headers: {
        prop_value: token,
        memberId: 34,
    },
    baseURL: `https://server.wearedj.club`,
});

export default instance;
