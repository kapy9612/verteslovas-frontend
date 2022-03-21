import React from "react"
import {graphql} from "gatsby"
import MainCardSection from "../components/organizms/card-section/MainCardSection";
import Layout from "../components/general/layout/Layout";

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
        </Layout>

    );
}

export const query = graphql`
  {
    csalad: strapiForFamiliesPage {
      main_section {
        title
        content {
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
