import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VideoState {
    videos: any[];
}

const initialState: VideoState = {
    videos: [],
};

const videoSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        setVideos: (state, action: PayloadAction<any[]>) => {
            state.videos = action.payload;
        },
    },
});

export const { setVideos } = videoSlice.actions;

export default videoSlice.reducer;
