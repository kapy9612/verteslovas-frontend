import React from "react"
import {graphql} from "gatsby"
import CampCardSection from "../components/organizms/card-section/CampCardSection";
import CampButtonCardSection from "../components/organizms/card-section/CampButtonCardSection";
import Layout from "../components/general/layout/Layout";
import SmallFormSection from "../components/organizms/form-section/SmallFormSection";
import taborform from "../../static/assets/tabor_form.png"
import SmallVideoSection from "../components/organizms/video-section/SmallVideoSection";

const Szervezznalunktaborokat = ({data: {camps}}) => {

    return (
        <Layout seo={camps.seo} isChild>

            {camps.main_section.content && camps.main_section.content.map((item, index) => (
                <CampCardSection
                    title={index === 0 ? camps.main_section.title : null}
                    card={item}
                    isRight={index % 2 === 1}
                    id={index}
                    key={index}
                    border={"true"}
                    first={true}
                />
            ))}
            <CampButtonCardSection
                cards={camps.landscape_cards}
                color={"white"}
                sand={true}
            />
            <SmallVideoSection
                first={false}
                video={camps.video_section.video.url}
                title={camps.main_section.title}
            />
            <SmallFormSection image={taborform}/>
        </Layout>
    );
}

export const query = graphql`
{
camps: strapiOrganizeYourCampPage
{
    video_section {
          video {
            url
          }
    }
    main_section
    {
        title
        content
        {
       
            description
            id
            title
            image
            {
                localFile
                {
                    publicURL
                }
            }
        }
    }
    landscape_cards
    {
        button
        {
            name
            slug
            id
        }
        cover
        {
            localFile
            {
                publicURL
            }
        }
        description
        id
        title
    }
    seo
    {
        description
        id
        isIndexable
        keywords
        title
        preview
        {
            localFile
            {
                publicURL
            }
        }
    }
}
  }
`

export default Szervezznalunktaborokat

