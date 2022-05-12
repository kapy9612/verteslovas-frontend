import React from 'react';

import Layout from "../components/general/layout/Layout";
import SectionLayoutGrid from "../components/atoms/layout/SectionLayoutGrid";

import {Col} from "../components/atoms/styled/layout/layoutComponents";
import {Header2} from "../components/atoms/styled/typography/typographyComponents";
import {SidebarHeader4} from "../components/molecules/styled/sidebar/sidebarComponents";
import {ButtonLink} from "../components/atoms/styled/button/buttonComponents";

const Koszonjuk = () => {
    return (
        <Layout seo={{title: "Köszönjük"}}>
            <SectionLayoutGrid customMinHeight={"medium"}>
                <Col>
                    <Header2 sand="true" textAlign="center" marginBottom="small">
                        Köszönjük a beküldést!
                    </Header2>
                    <SidebarHeader4 sand="true" textAlign="center">
                        Hamarosan felvesszük Önnel a kapcsolatot.
                    </SidebarHeader4>
                </Col>
                <Col grid justifyContent="center">
                    <ButtonLink to={"/"} variant="lightYellow">
                        Vissza a főoldalra
                    </ButtonLink>
                </Col>
            </SectionLayoutGrid>
        </Layout>
    );
};

export default Koszonjuk;