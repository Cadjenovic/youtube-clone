import axios from "axios";

const KEY = "AIzaSyB7zmKMLEj8W4uThPUgfYVlU5pm--BjlWo";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
    },
});
