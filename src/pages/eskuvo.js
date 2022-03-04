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
            <WeddingCardSection
                title={eskuvo.services_section.title}
                cards={eskuvo.services_section.cards}
            />
            {eskuvo.locations_section.content && eskuvo.locations_section.content.map((item, index) => (
                <MainCardSection
                    title={index === 0 ? eskuvo.locations_section.title : null}
                    card={item}
                    isRight={index % 2 === 1}
                    id={index}
                    key={index}
                />
            ))}
            <AboutUsSection
                title={eskuvo.they_said_section.title}
                cards={eskuvo.they_said_section.cards}
                image={image}
            />
            {eskuvo.housing_section.content && eskuvo.housing_section.content.map((item, index) => (
                <MainCardSection
                    title={index === 0 ? eskuvo.housing_section.title : null}
                    card={item}
                    isRight={index % 2 === 1}
                    id={index}
                    key={index}
                />
            ))}
            <GallerySection
                title={eskuvo.gallery_section.title}
                images={eskuvo.gallery_section.images}
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

