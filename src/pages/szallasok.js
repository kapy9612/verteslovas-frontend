import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/general/layout/Layout";
import MainCardRepeatableSection from "../components/organizms/card-section/MainCardRepeatableSection";
import VideoSection from "../components/organizms/video-section/VideoSection";

import terkep from "../../static/assets/vlTérkép.png"
import {TerkepImg} from "../components/atoms/styled/image/imageComponents";
import TableSection from "../components/organizms/table-section/TableSection";

const Szallasok = ({data: {szallas}}) => {

    return (
        <Layout seo={szallas.seo}>
            <TerkepImg  src={terkep}/>
            {szallas.buildings && szallas.buildings.map((item, index) => (
                <MainCardRepeatableSection
                    card={item}
                    isRight={index % 2 === 1}
                    id={index}
                    key={index}
                    sand={true}

                />
            ))}
            <TableSection sand={true}  isYellow={false} table={szallas.tables}/>
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
       tables {
       title
       id
        header {
          row1
          row2
          row3
        }
        table {
          row1
          row2
          row3
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

