import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";

const VideoPlayer = () => {
    const selectedVideo = useSelector(
        (state: RootState) => state.videos.selectedVideo
    );

    return (
        <div>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
        </div>
    );
};

export default VideoPlayer;
