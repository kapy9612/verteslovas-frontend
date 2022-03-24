import React, {useRef} from 'react';

import VideoJS from "../../general/video/VideoJS";

import {SmallVideoSectionContainer, VideoSectionContainer} from "../styled/video-section/videoSectionComponents";
import {Title} from "../../atoms/styled/typography/typographyComponents";

const SmallVideoSection = ({video}) => {

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
            src: video,
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
        <SmallVideoSectionContainer id="video-section">
            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </SmallVideoSectionContainer>
    );
};

export default SmallVideoSection;