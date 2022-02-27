import React from "react"
import { graphql } from "gatsby"
import MainCardSection from "../components/organizms/card-section/MainCardSection";
import Layout from "../components/general/layout/Layout";

const Csaladoknak = ({ data:{csalad} }) => {
    return(
        <Layout seo={csalad.seo}>
           <MainCardSection
           card={csalad.main_section.content}
           title={csalad.main_section.title}
           />
        </Layout>

    );
}

export const query = graphql`
  {
    csalad: strapiForFamiliesPage {
      main_section {
        title
        content {
          description
          id
          image {
            localFile {
              publicURL
            }
          }
          title
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


export default Csaladoknak
