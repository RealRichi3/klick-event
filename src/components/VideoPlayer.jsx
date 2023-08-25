import { useRef, useEffect, useState } from "react";
import video from "../assets/video.mp4";

function VideoPlayer() {
    const videoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleIntersection = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5, // Adjust this value based on your needs
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (isVisible && videoElement) {
            videoElement.play();
        }
    }, [isVisible]);

    return (
        <div className="video-wrapper">
            <video controls ref={videoRef} autoPlay loop width="100%" height="auto">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoPlayer;
