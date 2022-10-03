import { FC, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedVideo } from "../../state/slices/videoSlice";
import "./VideoCard.css";

interface IProps {
    // id: string;
    // title: string;
    // thumbnail: string;
    video: any;
}

const VideoCard: FC<IProps> = ({ video }) => {
    const ref = useRef<HTMLHeadingElement>(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Title scroll logic START
    let interval: ReturnType<typeof setInterval>;

    const startScrollTitle = () => {
        interval = setInterval(scrollTitle, 100);
    };

    const scrollTitle = () => {
        if (ref.current?.scrollTop || ref.current?.scrollTop === 0) {
            ref.current.scrollTop += 1.5;
        }
    };

    const stopScrollTitle = () => {
        clearInterval(interval);
        if (ref.current?.scrollTop || ref.current?.scrollTop === 0) {
            ref.current.scrollTop = 0;
        }
    };
    // Title scroll logic END

    const selectVideo = () => {
        dispatch(setSelectedVideo(video));
        navigate(`/video?v=${video.id.videoId}`);
    };

    return (
        <div
            className="video-card-info"
            onMouseEnter={startScrollTitle}
            onMouseLeave={stopScrollTitle}
            onClick={selectVideo}
        >
            <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                draggable="false"
            />
            <h5 ref={ref}>{video.snippet.title}</h5>
        </div>
    );
};

export default VideoCard;
