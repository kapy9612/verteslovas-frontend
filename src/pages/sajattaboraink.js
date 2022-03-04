import React from 'react';
import {graphql} from "gatsby";

import CampCardSection from "../components/organizms/card-section/CampCardSection";
import Layout from "../components/general/layout/Layout";


const Sajattaboraink = ({data: {camp}}) => {
    return (
        <Layout seo={camp.seo} isChild>
            {camp.main_section.content && camp.main_section.content.map((item, index) => (
                <CampCardSection
                    title={index === 0 ? camp.main_section.title : null}
                    card={item}
                    isRight={index % 2 === 1}
                    id={index}
                    key={index}
                    border={"true"}
                />
            ))}
        </Layout>
    );
};

export const query = graphql`
  {
    camp: strapiOurCampsPage {
      form_section {
        form_id
        id
        image {
          localFile {
            publicURL
          }
        }
      }
      main_section {
        id
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
        keywords
        title
        isIndexable
        description
        preview {
          localFile {
            publicURL
          }
        }
      }
    }
  }
`
export default Sajattaboraink;
/*  return (
        <div>
            <CampCardSection
                title={camp.main_section.title}
                cards={camp.main_section.content}
                border={"true"}
            />
        </div>
    );
};


*/