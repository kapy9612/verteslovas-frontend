import React from 'react';
import {CarouselDiv, NewsCarousel} from "../styled/index-news-section/indexNewsSectionComponents";

import testImg from "../../../../static/assets/test_news.png"

const IndexNewsSection = () => {
    return (
        <NewsCarousel
            autoPlay
            showThumbs={false}
            transitionTime={1000}
        >
            <CarouselDiv image={testImg}/>
            <CarouselDiv image={testImg}/>
        </NewsCarousel>
    );
};

export default IndexNewsSection;