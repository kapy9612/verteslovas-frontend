import React from "react"

import Layout from "../components/general/layout/Layout";
import SectionLayoutGrid from "../components/atoms/layout/SectionLayoutGrid";

import {Col} from "../components/atoms/styled/layout/layoutComponents";
import {Body, Title} from "../components/atoms/styled/typography/typographyComponents";
import {ButtonLink} from "../components/atoms/styled/button/buttonComponents";

const NotFoundPage = () => {
  return (
    <Layout seo={{title: "404 - Hiba"}}>
      <SectionLayoutGrid customMinHeight={"medium"}>
        <Col>
          <Title color="black" sand="true" textAlign="center">
            404 - Hiba
          </Title>
        </Col>
        <Col>
          <Body color="black" textAlign="center">
            A kért oldal nem található.
          </Body>
        </Col>
        <Col grid justifyContent="center">
          <ButtonLink to="/" variant="yellow">
            Vissza a főoldalra
          </ButtonLink>
        </Col>
      </SectionLayoutGrid>
    </Layout>
  )
}

export default NotFoundPage
