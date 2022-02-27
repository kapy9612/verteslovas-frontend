import React from "react"
import {graphql} from "gatsby"
import MainCardSection from "../components/organizms/card-section/MainCardSection";
import {
    MainCardLeftImg, MainCardRightImg, MainCardSectionContainer, MainLeftCardContainer,
    MainRightCardContainer
} from "../components/organizms/styled/card-section/cardSectionComponents";
import MainCard from "../components/molecules/cards/MainCard";
import {Col} from "../components/atoms/styled/layout/layoutComponents";
import SectionLayoutGrid from "../components/atoms/layout/SectionLayoutGrid";
import ActiveCardSection from "../components/organizms/card-section/ActiveCardSection";


const Szolgaltatasok = ({data: {szolg}}) => {

    return (
        <div>
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
                        <MainCardRightImg src={szolg.animator_section.image.localFile.publicURL}/>
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
        </div>
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

