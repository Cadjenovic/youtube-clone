import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface VideoState {
    searchedVideos: any[];
    recommendedVideos: any[];
    selectedVideo: any;
}

const initialState: VideoState = {
    searchedVideos: [],
    recommendedVideos: [],
    selectedVideo: null,
};

const videoSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        setSearchedVideos: (state, action: PayloadAction<any[]>) => {
            state.searchedVideos = action.payload;
        },
        setRecommendedVideos: (state, action: PayloadAction<any[]>) => {
            state.recommendedVideos = action.payload;
        },
        setSelectedVideo: (state, action: PayloadAction<any>) => {
            state.selectedVideo = action.payload;
        },
    },
});

export const { setSearchedVideos, setRecommendedVideos, setSelectedVideo } =
    videoSlice.actions;

export default videoSlice.reducer;
