import React from "react"
import {graphql} from "gatsby"
import CampCardSection from "../components/organizms/card-section/CampCardSection";
import CampButtonCardSection from "../components/organizms/card-section/CampButtonCardSection";

const Szervezznalunktaborokat = ({data: {camps}}) => {

    return (
        <div>
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

        </div>
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

