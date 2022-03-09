import React, {useRef} from 'react';

import {VideoSectionContainer} from "../styled/video-section/videoSectionComponents";
import VideoJS from "../../general/video/VideoJS";


const VideoSection = ({video}) => {

    const playerRef = useRef(null);

    const videoJsOptions = { // lookup the options in the docs for more options
        autoplay: true,
        muted: true,
        controls: true,
        responsive: true,
        loop: true,
        fluid: true,
        /*aspectRatio: '16:7',*/
        sources: [{
            src: '/test.mp4',
            type: 'video/mp4'
        }]
    }

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // you can handle player events here
        player.on('waiting', () => {
            console.log('player is waiting');
        });

        player.on('dispose', () => {
            console.log('player will dispose');
        });
    };

    return (
        <VideoSectionContainer id="video-section">
            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </VideoSectionContainer>
    );
};

export default VideoSection;