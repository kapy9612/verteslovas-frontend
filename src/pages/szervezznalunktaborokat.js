import React from "react"
import {graphql} from "gatsby"
import CampCardSection from "../components/organizms/card-section/CampCardSection";
import CampButtonCardSection from "../components/organizms/card-section/CampButtonCardSection";
import Layout from "../components/general/layout/Layout";

const Szervezznalunktaborokat = ({data: {camps}}) => {

    return (
        <Layout seo={camps.seo} isChild>
            <CampCardSection
                title={camps.main_section.title}
                cards={camps.main_section.content}
                border={"true"}
            />
            <CampButtonCardSection
                cards={camps.landscape_cards}
                color={"white"}
                sand={true}
            />

        </Layout>
    );
}

export const query = graphql`
  {
    camps: strapiOrganizeYourCampPage {
      main_section {
        title
        content {
          description
          id
          title
          image {
            localFile {
              publicURL
            }
          }
        }
      }
      landscape_cards {
        button {
          name
          slug
          id
        }
        cover {
          localFile {
            publicURL
          }
        }
        description
        id
        title
      }
      form_section {
        form_id
        id
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

export default Szervezznalunktaborokat

