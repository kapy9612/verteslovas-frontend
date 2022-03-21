import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/general/layout/Layout";
import MainCardRepeatableSection from "../components/organizms/card-section/MainCardRepeatableSection";
import MainCardSection from "../components/organizms/card-section/MainCardSection";
import VideoSection from "../components/organizms/video-section/VideoSection";
//import terkep from "../../static/assets/terkep.png"
//import {TerkepImg} from "../components/atoms/styled/image/imageComponents";

const Szallasok = ({data: {szallas}}) => {

    return (
        <Layout seo={szallas.seo} >
            {/*<TerkepImg  src={terkep}/>*/}
            {szallas.buildings && szallas.buildings.map((item, index) => (
                <MainCardRepeatableSection
                    card={item}
                    isRight={index % 2 === 1}
                    id={index}
                    key={index}
                    sand={true}

                />
            ))}
            <VideoSection
                video={szallas.video_section.video.url}
            />
        </Layout>
    );
}

export const query = graphql`
  {
    szallas: strapiHousingPage {
      video_section {
          video {
            url
          }
      }
      buildings {
        description
        title
        image {
          localFile {
            publicURL
          }
        }
      }
       seo {
        description
        id
        isIndexable
        keywords
        title
        preview {
          localFile {
            publicURL
          }
        }
      }
      
    }
  }
`

export default Szallasok

