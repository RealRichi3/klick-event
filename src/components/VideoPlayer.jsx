import { useRef, useEffect, useState } from "react";
import video from "../assets/video.mp4";

function VideoPlayer() {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        if (videoElement) {
            videoElement.play().catch(error => {
                console.error("Autoplay prevented:", error);
            });
        }
    }, []);

    return (
        <div className="video-wrapper">
            <video ref={videoRef} autoPlay loop muted width="100%" height="auto">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoPlayer;
