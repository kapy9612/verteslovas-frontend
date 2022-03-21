import React from 'react';
import {graphql} from "gatsby";

import IndexNewsSection from "../components/organizms/index-sections/IndexNewsSection";
import IndexCardSection from "../components/organizms/index-sections/IndexCardSection";
import VideoSection from "../components/organizms/video-section/VideoSection";

const Index = ({data}) => {

    const {strapiMainPage: {news, video_section}} = data

    return (
        <React.Fragment>
            <IndexNewsSection images={news}/>
            <IndexCardSection/>
            <VideoSection video={video_section.video.url}/>
        </React.Fragment>
    );
};

export const query = graphql`
  {
    strapiMainPage {
      news {
        localFile {
          publicURL
        }
      }
      video_section {
        video {
          url
        }
      }
    }
  }
`

export default Index;