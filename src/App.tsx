import React, { useState, useEffect } from "react";
import youtube from "./api/youtube";
import { useSelector, useDispatch } from "react-redux";
import { setVideos } from "./state/slices/videoSlice";
import { setSearchTerm } from "./state/slices/searchTermSlice";
import { RootState } from "./state/store";

const App = () => {
    const searchTerm = useSelector(
        (state: RootState) => state.searchTerm.searchTerm
    );
    const videos = useSelector((state: RootState) => state.videos.videos);
    const dispatch = useDispatch();

    useEffect(() => {
        youtube
            .get("/search", {
                params: {
                    q: searchTerm,
                },
            })
            .then((res) => dispatch(setVideos(res.data.items)));
    }, [searchTerm]);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(videos);
        dispatch(setSearchTerm(e.target.value));
    };

    return (
        <div className="App">
            App {searchTerm}
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => onInputChange(e)}
            />
        </div>
    );
};

export default App;
