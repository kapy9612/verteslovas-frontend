import React from "react"
import {graphql} from "gatsby"
import MainCardSection from "../components/organizms/card-section/MainCardSection";
import TrainerSection from "../components/organizms/trainer-section/TrainerSection";
import GallerySection from "../components/organizms/gallery-section/GallerySection";
import ActiveCardSection from "../components/organizms/card-section/ActiveCardSection";
import {Title} from "../components/atoms/styled/typography/typographyComponents";
import {Col} from "../components/atoms/styled/layout/layoutComponents";

const Lovaglas = ({data: {lovaglas}}) => {

    return (
        <div>

            <MainCardSection
                card={lovaglas.riding_types}
            />
            <TrainerSection
                trainers={lovaglas.trainer_section}
            />
            <GallerySection
                images={lovaglas.gallery_section.images}
                title={lovaglas.gallery_section.title}
            />
            <ActiveCardSection
                title={lovaglas.our_horses_section.title}
                cards={lovaglas.our_horses_section.cards}
            />
        </div>
    );
}

export const query = graphql`
  {
    lovaglas: strapiHorseRidingPage {
    title
      gallery_section {
        title
        images {
          localFile {
            publicURL
          }
        }
      }
      our_horses_section {
        title
        id
        cards {
          cover {
            localFile {
              publicURL
            }
          }
          description
          title
        }
      }
      prices {
        header {
          row1
          row2
        }
        table {
          row1
          row2
        }
        title
      }
      riding_types {
        description
        id
        image {
          localFile {
            publicURL
          }
        }
        title
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
      trainer_section {
        description
        name
        phone
        role
        avatar {
          localFile {
            publicURL
          }
        }
      }
    }
  }
`

export default Lovaglas

