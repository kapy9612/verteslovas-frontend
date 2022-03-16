import React from 'react';

import IndexNewsSection from "../components/organizms/index-sections/IndexNewsSection";
import IndexCardSection from "../components/organizms/index-sections/IndexCardSection";
import VideoSection from "../components/organizms/video-section/VideoSection";

const Index = () => {
    return (
        <React.Fragment>
            <IndexNewsSection/>
            <IndexCardSection/>
            <VideoSection index/>
        </React.Fragment>
    );
};

export default Index;