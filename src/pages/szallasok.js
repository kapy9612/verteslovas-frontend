import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/general/layout/Layout";
import MainCardRepeatableSection from "../components/organizms/card-section/MainCardRepeatableSection";

import terkep from "../../static/assets/vlTérkép.png"
import {TerkepImg} from "../components/atoms/styled/image/imageComponents";
import TableSection from "../components/organizms/table-section/TableSection";
import SmallVideoSection from "../components/organizms/video-section/SmallVideoSection";
import MapSection from "../components/organizms/map-section/MapSection";

const Szallasok = ({data: {szallas}}) => {

    return (
        <Layout seo={szallas.seo}>

            <MapSection></MapSection>
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
            <SmallVideoSection
                title={"Tekintsd meg promó videónkat"}
                video={szallas.video_section.video.url}
            />
            <TableSection sand={true}  isYellow={false} table={szallas.tables}/>
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

