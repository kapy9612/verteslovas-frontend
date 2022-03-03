import React from "react"
import {graphql} from "gatsby"
import MainCardSection from "../components/organizms/card-section/MainCardSection";
import Layout from "../components/general/layout/Layout";
import terkep from "../../static/assets/terkep.png"
import {TerkepImg} from "../components/atoms/styled/image/imageComponents";
import MainCardRepeatableSection from "../components/organizms/card-section/MainCardRepeatableSection";
const Szallasok = ({data: {szallas}}) => {

    return (
        <Layout seo={szallas.seo} >
            <TerkepImg  src={terkep}/>
            <MainCardRepeatableSection
                card={szallas.buildings}
            />
        </Layout>
    );
}

export const query = graphql`
  {
    szallas: strapiHousingPage {
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

