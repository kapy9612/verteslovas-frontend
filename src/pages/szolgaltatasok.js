import React from "react"
import {graphql} from "gatsby"

import SectionLayoutGrid from "../components/atoms/layout/SectionLayoutGrid";
import ActiveCardSection from "../components/organizms/card-section/ActiveCardSection";
import SimpleTableSection from "../components/organizms/table-section/SimpleTableSection";
import Layout from "../components/general/layout/Layout";
import MainCard from "../components/molecules/cards/MainCard";

import {
    MainCardSectionContainer, MainLeftCardContainer, StyledCarousel,
} from "../components/organizms/styled/card-section/cardSectionComponents";
import {Col} from "../components/atoms/styled/layout/layoutComponents";
import {Img} from "../components/atoms/styled/image/imageComponents";
import {Title} from "../components/atoms/styled/typography/typographyComponents";
import VideoSection from "../components/organizms/video-section/VideoSection";

const Szolgaltatasok = ({data: {szolg}}) => {

    return (
        <Layout seo={szolg.seo}>
            <VideoSection
                video={szolg.video_section.video.url}
            />
            <SectionLayoutGrid id="szolgaltatasok" customPadding={"firstElement"}>
                <Col span={12}>
                    <Title textAlign={"center"} marginBottom={"largest"} sand={true}>Szolgáltatások</Title>
                    <MainCardSectionContainer>
                        <MainLeftCardContainer>
                            <MainCard
                                color={"grey"}
                                title={szolg.animator_section.title}
                                description={szolg.animator_section.description}
                                sand={true}
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
                id={1}
                cards={szolg.active_games.cards}
                title={szolg.active_games.title}
                sand={true}
            />

            <ActiveCardSection
                id={2}
                cards={szolg.craftsman_programs.cards}
                title={szolg.craftsman_programs.title}
                sand={true}

            />
            <ActiveCardSection
                id={3}
                cards={szolg.horse_programs.cards}
                title={szolg.horse_programs.title}
                sand={true}

            />
            <ActiveCardSection
                id={4}
                cards={szolg.group_programs.cards}
                title={szolg.group_programs.title}
                sand={true}

            />
            <ActiveCardSection
                id={5}
                cards={szolg.meals.cards}
                title={szolg.meals.title}
                sand={true}

            />
            <SimpleTableSection
                id={2}
                title={szolg.rents.title}
                header={szolg.rents.header}
                rows={szolg.rents.table}
                sand={true}
            />
        </Layout>
    );
}

export const query = graphql`
  {
    szolg: strapiServicesPage {
      video_section {
          video {
            url
          }
      }
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
      meals {
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

