import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./slices/videoSlice";
import searchTermReducer from "./slices/searchTermSlice";

export const store = configureStore({
    reducer: {
        videos: videoReducer,
        searchTerm: searchTermReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
