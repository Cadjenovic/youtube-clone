import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface VideoState {
    searchedVideos: any[];
    trendingVideos: any[];
}

const initialState: VideoState = {
    searchedVideos: [],
    trendingVideos: [],
};

const videoSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        setSearchedVideos: (state, action: PayloadAction<any[]>) => {
            state.searchedVideos = action.payload;
        },
    },
});

export const { setSearchedVideos } = videoSlice.actions;

export default videoSlice.reducer;
