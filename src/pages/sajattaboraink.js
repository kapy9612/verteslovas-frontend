import React from 'react';
import {graphql} from "gatsby";

import CampCardSection from "../components/organizms/card-section/CampCardSection";
import Layout from "../components/general/layout/Layout";
import CampFormSection from "../components/organizms/form-section/CampFormSection";
import VideoSection from "../components/organizms/video-section/VideoSection";
import SimpleTableSection from "../components/organizms/table-section/SimpleTableSection";


const Sajattaboraink = ({data: {camp}}) => {
    return (
        <Layout seo={camp.seo} isChild>
            <VideoSection
                video={camp.video_section.video.url}
            />
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
            <SimpleTableSection title={camp.table_section.title} sand={true} header={camp.table_section.header}
                                isYellow={true} rows={camp.table_section.table}/>
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
      form_section {
        form_id
        id
        
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