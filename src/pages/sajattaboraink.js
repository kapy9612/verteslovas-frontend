import React from 'react';
import {graphql} from "gatsby";

import CampCardSection from "../components/organizms/card-section/CampCardSection";
import Layout from "../components/general/layout/Layout";
import CampFormSection from "../components/organizms/form-section/CampFormSection";
import SimpleTableSection from "../components/organizms/table-section/SimpleTableSection";
import SmallVideoSection from "../components/organizms/video-section/SmallVideoSection";


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
                    first={index === 0}
                />
            ))}
            <SimpleTableSection title={camp.table_section.title} subtitle={true} sand={true} header={camp.table_section.header}
                                isYellow={true} rows={camp.table_section.table}/>
            <SmallVideoSection
                first={false}
                video={camp.video_section.video.url}
                title={"Tekintse meg a táborainkról készült videót"}
            />
            <CampFormSection
                card={camp.form_section}
            />
        </Layout>
    );
};

export const query = graphql`
  {
    camp: strapiOurCampsPage {
      video_section {
          video {
            url
          }
      }
       table_section {
       id
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
