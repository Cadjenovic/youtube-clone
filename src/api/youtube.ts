import axios from "axios";

const KEY = "AIzaSyB7zmKMLEj8W4uThPUgfYVlU5pm--BjlWo";

export const youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
    },
});

export const searchWithTerm = (searchTerm: string) => {
    const data = youtube.get("/search", {
        params: {
            q: searchTerm,
        },
    });
    return data;
};
