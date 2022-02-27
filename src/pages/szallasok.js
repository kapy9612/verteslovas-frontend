import React from "react"
import {graphql} from "gatsby"
import MainCardSection from "../components/organizms/card-section/MainCardSection";


const Szallasok = ({data: {szallas}}) => {

    return (
        <div>
            <MainCardSection
                card={szallas.buildings}
            />
        </div>
    );
}

export const query = graphql`
  {
    szallas: strapiHousingPage {
      buildings {
        description
        title
        image {
          localFile {
            publicURL
          }
        }
      }
    }
  }
`

export default Szallasok

