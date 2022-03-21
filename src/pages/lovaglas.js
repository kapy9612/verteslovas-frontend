import React from "react"
import {graphql} from "gatsby"

import MainCardSection from "../components/organizms/card-section/MainCardSection";
import TrainerSection from "../components/organizms/trainer-section/TrainerSection";
import GallerySection from "../components/organizms/gallery-section/GallerySection";
import ActiveCardSection from "../components/organizms/card-section/ActiveCardSection";
import Layout from "../components/general/layout/Layout";
import SimpleTableSection from "../components/organizms/table-section/SimpleTableSection";
import VideoSection from "../components/organizms/video-section/VideoSection";

const Lovaglas = ({data: {lovaglas}}) => {

    return (
        <Layout seo={lovaglas.seo}>
            <VideoSection
                video={lovaglas.video_section.video.url}
            />
            {lovaglas.riding_types && lovaglas.riding_types.map((item, index) => (
                <MainCardSection
                    title={index === 0 ? lovaglas.title : null}
                    card={item}
                    isRight={index % 2 === 1}
                    id={index}
                    key={index}
                    sand={true}

                />
            ))}
            <TrainerSection
                trainers={lovaglas.trainer_section}
            />
            <GallerySection
                images={lovaglas.gallery_section.images}
                title={lovaglas.gallery_section.title}
                sand={true}

            />
            <SimpleTableSection
                title={lovaglas.prices.title}
                header={lovaglas.prices.header}
                rows={lovaglas.prices.table}
                sand={true}

            />

            <ActiveCardSection
                title={lovaglas.our_horses_section.title}
                cards={lovaglas.our_horses_section.cards}
                sand={true}

            />
        </Layout>
    );
}

export const query = graphql`
  {
    lovaglas: strapiHorseRidingPage {
      video_section {
          video {
            url
          }
      }
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

