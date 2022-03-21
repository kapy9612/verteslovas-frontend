import React from 'react';
import {CarouselDiv, NewsCarousel} from "../styled/index-news-section/indexNewsSectionComponents";

import testImg from "../../../../static/assets/test_news.png"

const IndexNewsSection = ({images}) => {
    return (
        <NewsCarousel
            autoPlay
            showThumbs={false}
            transitionTime={1000}
        >
            {images && images.map((item, index) => (
                <CarouselDiv image={item.localFile.publicURL} key={index}/>
            ))}
        </NewsCarousel>
    );
};

export default IndexNewsSection;