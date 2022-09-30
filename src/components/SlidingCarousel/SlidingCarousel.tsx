import { FC, useRef } from "react";
import VideoCard from "../VideoCard/VideoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./SlidingCarousel.css";

interface IProps {
    title: string;
    videos: any[];
}

const SlidingCarousel: FC<IProps> = ({ title, videos }) => {
    // Reference to the div, so we can scroll it
    const ref = useRef<HTMLDivElement>(null);

    // Array of videos mapped
    const mapped = videos.map((video) => {
        return (
            <VideoCard
                key={video.id.videoId}
                title={video.snippet.title}
                thumbnail={video.snippet.thumbnails.medium.url}
            />
        );
    });

    // Scrolling logic
    // Arrow scroll
    let interval: ReturnType<typeof setInterval>;

    const startScrollCarouselLeft = () => {
        interval = setInterval(scrollCarouselLeft, 100);
    };

    const startScrollCarouselRight = () => {
        interval = setInterval(scrollCarouselRight, 100);
    };

    const scrollCarouselLeft = () => {
        if (ref.current?.scrollLeft || ref.current?.scrollLeft === 0) {
            ref.current.scrollLeft -= 10;
        }
    };

    const scrollCarouselRight = () => {
        if (ref.current?.scrollLeft || ref.current?.scrollLeft === 0) {
            ref.current.scrollLeft += 10;
        }
    };

    const stopScrollCarousel = () => {
        clearInterval(interval);
    };

    // Drag scroll
    let isDown: boolean = false;
    let startX: number;
    let scrollLeft: number;

    const scrollMouseDown = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        isDown = true;
        startX = e.pageX - e.currentTarget.offsetLeft;
        scrollLeft = e.currentTarget.scrollLeft;
    };

    const scrollMouseLeave = () => {
        isDown = false;
    };

    const scrollMouseUp = () => {
        isDown = false;
    };

    const scrollMouseMove = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (!isDown) return;

        e.preventDefault();
        const x = e.pageX - e.currentTarget.offsetLeft;
        const deviation = x - startX;
        e.currentTarget.scrollLeft = scrollLeft - deviation;
    };

    return (
        <div
            className="carousel-container"
            style={videos.length === 0 ? { display: "none" } : {}}
        >
            <div
                ref={ref}
                className="carousel-overflow"
                onMouseDown={(e) => scrollMouseDown(e)}
                onMouseUp={scrollMouseUp}
                onMouseLeave={scrollMouseLeave}
                onMouseMove={(e) => scrollMouseMove(e)}
            >
                <FontAwesomeIcon
                    id="cbl"
                    className="carousel-button-left"
                    onMouseDown={startScrollCarouselLeft}
                    onMouseUp={stopScrollCarousel}
                    icon={faAngleLeft}
                />
                {mapped}
                <FontAwesomeIcon
                    id="cbr"
                    className="carousel-button-right"
                    onMouseDown={startScrollCarouselRight}
                    onMouseUp={stopScrollCarousel}
                    icon={faAngleRight}
                />
            </div>
        </div>
    );
};

export default SlidingCarousel;
