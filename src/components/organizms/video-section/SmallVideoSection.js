import React, {useRef} from 'react';

import VideoJS from "../../general/video/VideoJS";
import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";

import {Header2} from "../../atoms/styled/typography/typographyComponents";
import {Col} from "../../atoms/styled/layout/layoutComponents";
import {SmallVideoSectionContainer} from "../styled/video-section/videoSectionComponents";

const SmallVideoSection = ({video, title}) => {

    const playerRef = useRef(null);

    const videoJsOptions = { // lookup the options in the docs for more options
        autoplay: false,
        muted: false,
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
        <SectionLayoutGrid id="small-video-section">
            <Col>
                <Header2 sand="true" textAlign="center">
                    {title}
                </Header2>
            </Col>
            <SmallVideoSectionContainer>
                <VideoJS options={videoJsOptions} onReady={handlePlayerReady}/>
            </SmallVideoSectionContainer>
        </SectionLayoutGrid>
    );
};

export default SmallVideoSection;