import React from "react"
import {graphql} from "gatsby"

import MainCardSection from "../components/organizms/card-section/MainCardSection";
import Layout from "../components/general/layout/Layout";
import CompanyFormSection from "../components/organizms/form-section/CompanyFormSection";
import SmallVideoSection from "../components/organizms/video-section/SmallVideoSection";

const Cegeknek = ({data: {ceg}}) => {
    return (
        <Layout seo={ceg.seo}>
            {ceg.main_section.content && ceg.main_section.content.map((item, index) => (
                <MainCardSection
                    title={index === 0 ? ceg.main_section.title : null}
                    card={item}
                    isRight={index % 2 === 1}
                    id={index}
                    key={index}
                    sand={true}
                />
            ))}
            <SmallVideoSection
                title={"Tekintsd meg promó videónkat"}
                video={ceg.video_section.video.url}
            />
        <CompanyFormSection/>
        </Layout>

    );
}

export const query = graphql`
  {
    ceg: strapiForCompaniesPage {
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
      video_section {
          video {
            url
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
