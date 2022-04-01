import React, {useRef} from 'react';

import VideoJS from "../../general/video/VideoJS";
import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";

import {Body, Header2, Title} from "../../atoms/styled/typography/typographyComponents";
import {Col} from "../../atoms/styled/layout/layoutComponents";
import { WeddingVideoSectionContainer} from "../styled/video-section/videoSectionComponents";

const SmallVideoSection = ({video, title,description}) => {

    const playerRef = useRef(null);

    const videoJsOptions = { // lookup the options in the docs for more options
        autoplay: true,
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
                <Title sand={false} textAlign="center">
                    {title}
                </Title>
            </Col>
            <WeddingVideoSectionContainer>
                <VideoJS options={videoJsOptions} onReady={handlePlayerReady}/>
            </WeddingVideoSectionContainer>
            <Col>
                <Body textAlign={"left"} weight={"bolder"} marginBottom={"largest"} marginTop={"small"}>{description}</Body>
            </Col>
        </SectionLayoutGrid>
    );
};

export default SmallVideoSection;