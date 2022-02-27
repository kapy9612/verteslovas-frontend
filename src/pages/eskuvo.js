import React from "react"
import {graphql} from "gatsby"
import WeddingHeroSection from "../components/organizms/hero-section/WeddingHeroSection";
import MainCardSection from "../components/organizms/card-section/MainCardSection";
import WeddingCardSection from "../components/organizms/card-section/WeddingCardSection";
import Layout from "../components/general/layout/Layout";
import GallerySection from "../components/organizms/gallery-section/GallerySection";
import AboutUsSection from "../components/organizms/about-us-section/AboutUsSection";
import image from "../components/molecules/stories/dummy/icon.png"

const Eskuvo = ({data: {eskuvo}}) => {
    return (
        <Layout seo={eskuvo.seo}>
            <WeddingHeroSection
                title={eskuvo.header.title}
                image={eskuvo.header.image.localFile.publicURL}
                description={eskuvo.header.description}
            />
            <MainCardSection
                title={eskuvo.locations_section.title}
                card={eskuvo.locations_section.content}
            />
            <WeddingCardSection
                title={eskuvo.services_section.title}
                cards={eskuvo.services_section.cards}
            />
            <MainCardSection
                title={eskuvo.housing_section.title}
                card={eskuvo.housing_section.content}
            />
            <GallerySection
            title={eskuvo.gallery_section.title}
            images={eskuvo.gallery_section.images}
            />
            <AboutUsSection
            title={eskuvo.they_said_section.title}
            cards={eskuvo.they_said_section.cards}
            image={image}
            />
        </Layout>
    );
}

export const query = graphql`
  {
    eskuvo: strapiWeddingPage {
      form_section {
        form_id
        image {
          localFile {
            publicURL
          }
        }
      }
      gallery_section {
        title
        images {
          localFile {
            publicURL
          }
        }
      }
      header {
        description
        title
        image {
          localFile {
            publicURL
          }
        }
      }
      housing_section {
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
      locations_section {
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
        id
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
      services_section {
        title
        cards {
          description
          title
          logo {
            localFile {
              publicURL
            }
          }
        }
      }
      they_said_section {
        title
        cards {
          description
          name
        }
      }
    }
  }
`

export default Eskuvo

