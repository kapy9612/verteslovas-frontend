import React from "react"
import { graphql } from "gatsby"
import MainCardSection from "../components/organizms/card-section/MainCardSection";
import Layout from "../components/general/layout/Layout";

const Cegeknek = ({ data:{ceg} }) => {
    return(
        <Layout seo={ceg.seo}>
            <MainCardSection
            title={ceg.main_section.title}
            card={ceg.main_section.content}
            />
        </Layout>

    );
}

export const query = graphql`
  {
    ceg: strapiForCompaniesPage {
      form_section {
        form_id
        image {
          localFile {
            publicURL
          }
        }
      }
      main_section {
        title
        content {
          description
          title
          image {
            localFile {
              publicURL
            }
          }
        }
      }
      seo {
        description
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

export default Cegeknek
