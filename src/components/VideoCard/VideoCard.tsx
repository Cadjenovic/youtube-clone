import { FC, useRef } from "react";
import "./VideoCard.css";

interface IProps {
    title: string;
    thumbnail: string;
}

const VideoCard: FC<IProps> = ({ title, thumbnail }) => {
    const ref = useRef<HTMLHeadingElement>(null);

    // Title scroll logic
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
            console.log("cao");
            ref.current.scrollTop = 0;
        }
    };

    return (
        <div
            className="video-card-info"
            onMouseEnter={startScrollTitle}
            onMouseLeave={stopScrollTitle}
        >
            <img src={thumbnail} alt={title} draggable="false" />
            <h5 ref={ref}>{title}</h5>
        </div>
    );
};

export default VideoCard;
