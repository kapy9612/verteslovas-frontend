import React from "react"
import {graphql} from "gatsby"
import MainCardSection from "../components/organizms/card-section/MainCardSection";
import TrainerSection from "../components/organizms/trainer-section/TrainerSection";
import GallerySection from "../components/organizms/gallery-section/GallerySection";
import ActiveCardSection from "../components/organizms/card-section/ActiveCardSection";
import Layout from "../components/general/layout/Layout";
import SimpleTableSection from "../components/organizms/table-section/SimpleTableSection";

const Lovaglas = ({data: {lovaglas}}) => {

    return (
        <Layout seo={lovaglas.seo}>
            <MainCardSection
                title={lovaglas.title}
                card={lovaglas.riding_types}
            />

            <TrainerSection
                trainers={lovaglas.trainer_section}
            />
            <SimpleTableSection
                title={lovaglas.prices.title}
                header={lovaglas.prices.header}
                rows={lovaglas.prices.table}
            />
            <GallerySection
                images={lovaglas.gallery_section.images}
                title={lovaglas.gallery_section.title}
            />
            <ActiveCardSection
                title={lovaglas.our_horses_section.title}
                cards={lovaglas.our_horses_section.cards}
            />
        </Layout>
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

