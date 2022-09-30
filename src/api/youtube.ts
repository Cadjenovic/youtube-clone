import axios from "axios";

const KEY = "AIzaSyCZVWKqh1tSezPSd4zt1Irn9LC33HPrG-A";

export const youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 10,
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

export const searchTrendingVideos = async (searchTerm: string) => {
    const data = await youtube.get("/search", {
        params: {
            q: searchTerm,
            chart: "mostPopular",
        },
    });
    return data;
};
