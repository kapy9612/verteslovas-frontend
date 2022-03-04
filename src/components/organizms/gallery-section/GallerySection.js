import React from 'react';

import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import Gallery from "../../molecules/gallery/Gallery";

import {Col} from "../../atoms/styled/layout/layoutComponents";
import {Title} from "../../atoms/styled/typography/typographyComponents";

const GallerySection = ({title, images}) => {

    return (
        <SectionLayoutGrid id="gallery-section">
            <Col span={12}>
                <Title textAlign="center" marginBottom="medium">{title}</Title>
            </Col>
            <Col>
                <Gallery
                    images={images}
                />
            </Col>
        </SectionLayoutGrid>
    );
};
export default GallerySection;