import React from "react"
import {graphql} from "gatsby"

import {
    MainCardCarausel,
    MainCardRightImg, MainCardSectionContainer, MainLeftCardContainer, StyledCarousel,
} from "../components/organizms/styled/card-section/cardSectionComponents";
import MainCard from "../components/molecules/cards/MainCard";
import {Col} from "../components/atoms/styled/layout/layoutComponents";
import SectionLayoutGrid from "../components/atoms/layout/SectionLayoutGrid";
import ActiveCardSection from "../components/organizms/card-section/ActiveCardSection";
import SimpleTableSection from "../components/organizms/table-section/SimpleTableSection";
import Layout from "../components/general/layout/Layout";
import {Img} from "../components/atoms/styled/image/imageComponents";
import {Carousel} from "react-responsive-carousel";


const Szolgaltatasok = ({data: {szolg}}) => {

    return (
        <Layout seo={szolg.seo}>
            <SectionLayoutGrid>
                <Col span={12}>
                    <MainCardSectionContainer>
                        <MainLeftCardContainer>
                            <MainCard
                                color={"grey"}
                                title={szolg.animator_section.title}
                                description={szolg.animator_section.description}
                            />
                        </MainLeftCardContainer>
                        <StyledCarousel autoPlay={true} infiniteLoop={true} showThumbs={false} transitionTime={1000}>
                            {szolg.animator_section.image.map((pic, index) => (
                                <Img src={pic.localFile.publicURL} key={index}/>
                            ))}
                        </StyledCarousel>

                    </MainCardSectionContainer>
                </Col>
            </SectionLayoutGrid>
            <ActiveCardSection
                cards={szolg.active_games.cards}
                title={szolg.active_games.title}
            />
            <ActiveCardSection
                cards={szolg.craftsman_programs.cards}
                title={szolg.craftsman_programs.title}
            />
            <ActiveCardSection
                cards={szolg.horse_programs.cards}
                title={szolg.horse_programs.title}
            />
            <ActiveCardSection
                cards={szolg.group_programs.cards}
                title={szolg.group_programs.title}
            />
            <SimpleTableSection
                title={szolg.meal.title}
                header={szolg.meal.header}
                rows={szolg.meal.table}
            />
            <SimpleTableSection
                title={szolg.rents.title}
                header={szolg.rents.header}
                rows={szolg.rents.table}
            />
        </Layout>
    );
}

export const query = graphql`
  {
    szolg: strapiServicesPage {
      active_games {
        title
        cards {
        description
          cover {
            localFile {
              publicURL
            }
          }
        }
      }
      animator_section {
        description
        title
        image {
          localFile {
            publicURL
          }
        }
      }
      craftsman_programs {
        title
        cards {
          title
          description
          cover {
            localFile {
              publicURL
            }
          }
        }
      }
      group_programs {
        title
        cards {
          cover {
            localFile {
              publicURL
            }
          }
          description
          title
        }
      }
      horse_programs {
        title
        cards {
          cover {
            localFile {
              publicURL
            }
          }
          description
          title
        }
      }
      meal {
        title
        header {
          row1
          row2
        }
        table {
          row1
          row2
        }
      }
      rents {
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


export default Szolgaltatasok

