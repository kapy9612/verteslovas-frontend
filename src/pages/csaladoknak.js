import React from "react"
import {graphql} from "gatsby"
import MainCardSection from "../components/organizms/card-section/MainCardSection";
import Layout from "../components/general/layout/Layout";
import FamilyFormSection from "../components/organizms/form-section/FamilyFormSection";
import SmallVideoSection from "../components/organizms/video-section/SmallVideoSection";

const Csaladoknak = ({data: {csalad}}) => {
    return (
        <Layout seo={csalad.seo}>

            {csalad.main_section.content && csalad.main_section.content.map((item, index) => (
                <MainCardSection
                    title={index === 0 ? csalad.main_section.title : null}
                    card={item}
                    isRight={index % 2 === 1}
                    id={index}
                    key={index}
                    sand={true}

                />
            ))}
            <SmallVideoSection
                title={"Tekintsd meg promó videónkat"}
                video={csalad.video_section.video.url}
            />
            <FamilyFormSection />
        </Layout>

    );
}

export const query = graphql`
  {
    csalad: strapiForFamiliesPage {
      main_section {
        title
        content {
        button {
          name
          slug
        }
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
      video_section {
          video {
            url
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
