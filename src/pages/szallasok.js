import React from "react"
import {graphql} from "gatsby"
import MainCardSection from "../components/organizms/card-section/MainCardSection";
import Layout from "../components/general/layout/Layout";


const Szallasok = ({data: {szallas}}) => {

    return (
        <Layout seo={szallas.seo}>
            <MainCardSection
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
    }
  }
`

export default Szallasok

