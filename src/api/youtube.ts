import axios from "axios";

// const KEY = "AIzaSyCZVWKqh1tSezPSd4zt1Irn9LC33HPrG-A";
// const KEY = "AIzaSyC3KGjVlYtDLQdDyMw1Mc9Yz3xecNJRK6o";
// const KEY = "AIzaSyB2_hFh9eJEkFtkuXNK4omTgChwUvwfbTU";
// const KEY = "AIzaSyBmIXsRO0SIzjELF4FflzhDyeykNjhw4z4";
// const KEY = "AIzaSyAPW8h9nnodkTgTtDHtuOmFoocXxC0iTmk";
// const KEY = "AIzaSyCGcXijYyQqj-95Khcz0fukSxuBLQkMgDE";
const KEY = "AIzaSyBz7KwJrNYv36mvkbn-Qoh-3KTzm-8AUHA";

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

export const searchRecommendedVideos = (searchTerms: string[]) => {
    const data = axios.all(
        searchTerms.map((searhTerm) => searchWithTerm(searhTerm))
    );

    return data;
};
