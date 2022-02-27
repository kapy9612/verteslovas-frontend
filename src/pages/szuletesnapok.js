import React from 'react';
import {graphql} from "gatsby";

import CampCardSection from "../components/organizms/card-section/CampCardSection";
import SimpleTableSection from "../components/organizms/table-section/SimpleTableSection";
import Layout from "../components/general/layout/Layout";

const Szuletesnapok = ({data: {birthdays}}) => {
    return (
        <Layout seo={birthdays.seo}>
            <CampCardSection
                title={birthdays.main_section.title}
                cards={birthdays.main_section.content}
                border={"true"}
            />
            <SimpleTableSection
                isYellow
                title={birthdays.table.title}
                header={birthdays.table.header}
                rows={birthdays.table.table}
            />
        </Layout>
    );
};

export const query = graphql`
  {
    birthdays: strapiBirthdayPage {
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