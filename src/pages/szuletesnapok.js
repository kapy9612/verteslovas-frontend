import React from 'react';
import {graphql} from "gatsby";

import CampCardSection from "../components/organizms/card-section/CampCardSection";
import SimpleTableSection from "../components/organizms/table-section/SimpleTableSection";
import Layout from "../components/general/layout/Layout";
import BirthdayFormSection from "../components/organizms/form-section/BirthdayFormSection";
import VideoSection from "../components/organizms/video-section/VideoSection";

const Szuletesnapok = ({data: {birthdays}}) => {
    return (
        <Layout seo={birthdays.seo} isChild>
            <VideoSection
                video={birthdays.video_section.video.url}
            />
            {birthdays.main_section.content && birthdays.main_section.content.map((item, index) => (
                <CampCardSection
                    title={index === 0 ? birthdays.main_section.title : null}
                    card={item}
                    isRight={index % 2 === 1}
                    id={index}
                    key={index}
                    border={"true"}
                />
            ))}
            <SimpleTableSection
                isYellow
                title={birthdays.table.title}
                header={birthdays.table.header}
                rows={birthdays.table.table}
                sand={true}
            />
            <BirthdayFormSection card={birthdays.form_section}/>
        </Layout>
    );
};

export const query = graphql`
  {
    birthdays: strapiBirthdayPage {
      video_section {
        video {
          url
        }
      }
      form_section {
        form_id
        id
       
      }
      main_section {
        title
        content {
          title
          description
          image {
            localFile {
              publicURL
            }
          }
        }
      }
      seo {
        title
        keywords
        isIndexable
        description
        preview {
          localFile {
            publicURL
          }
        }
      }
      table {
        title
        table {
          id
          row1
          row2
        }
        header {
          id
          row1
          row2
        }
      }
    }
  }
`

export default Szuletesnapok;